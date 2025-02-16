import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { Text, Surface, Button, Avatar, Chip } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { upcomingEvents } from "../../../data/mockEvents";
import { Colors, createShadow } from "../../../constants/Colors";

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = upcomingEvents.find((e) => e.id === id);

  if (!event) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.imageUrl }} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.imageContent}>
          <Chip style={styles.chip}>
            <MaterialCommunityIcons
              name="calendar"
              size={16}
              color={Colors.primary.main}
            />
            <Text> {format(event.date, "EEEE, MMM d")}</Text>
          </Chip>
          <Text variant="headlineMedium" style={styles.title}>
            {event.title}
          </Text>
          <View style={styles.locationRow}>
            <MaterialCommunityIcons
              name="map-marker"
              size={20}
              color={Colors.background.primary}
            />
            <Text variant="titleMedium" style={styles.location}>
              {event.location}
            </Text>
          </View>
        </View>
      </View>

      <Surface style={[styles.infoCard, createShadow(4)]}>
        <View style={styles.hostSection}>
          <View style={styles.hostInfo}>
            <Avatar.Image size={48} source={{ uri: event.host.avatarUrl }} />
            <View>
              <Text variant="labelSmall" style={styles.hostedBy}>
                Hosted by
              </Text>
              <Text variant="titleMedium">{event.host.name}</Text>
            </View>
          </View>
          <Button mode="contained-tonal">Message</Button>
        </View>

        <View style={styles.divider} />

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color={Colors.text.secondary}
            />
            <Text variant="titleMedium">
              {event.attendees}/{event.maxAttendees}
            </Text>
            <Text variant="labelSmall" style={styles.statLabel}>
              Attendees
            </Text>
          </View>
          <View style={styles.stat}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={24}
              color={Colors.text.secondary}
            />
            <Text variant="titleMedium">{format(event.date, "h:mm a")}</Text>
            <Text variant="labelSmall" style={styles.statLabel}>
              Start Time
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.description}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            About this event
          </Text>
          <Text variant="bodyLarge" style={styles.descriptionText}>
            {event.description}
          </Text>
        </View>
      </Surface>

      <View style={styles.actions}>
        <Button
          mode="contained"
          style={styles.actionButton}
          contentStyle={styles.actionButtonContent}
        >
          Join Event
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  imageContainer: {
    height: 300,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  imageContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  chip: {
    backgroundColor: Colors.background.primary + "E6",
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  title: {
    color: Colors.background.primary,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  location: {
    color: Colors.background.primary,
  },
  infoCard: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.background.primary,
  },
  hostSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  hostInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  hostedBy: {
    color: Colors.text.secondary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.ui.border,
    marginVertical: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  stat: {
    alignItems: "center",
  },
  statLabel: {
    color: Colors.text.secondary,
    marginTop: 4,
  },
  description: {
    gap: 8,
  },
  sectionTitle: {
    color: Colors.text.primary,
  },
  descriptionText: {
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  actions: {
    padding: 16,
    paddingTop: 0,
  },
  actionButton: {
    borderRadius: 12,
  },
  actionButtonContent: {
    height: 48,
  },
});

import { Image, Pressable, StyleSheet, View } from "react-native";
import { Text, Surface, Chip, Avatar } from "react-native-paper";
import { router } from "expo-router";
import { format } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Event } from "../data/mockEvents";
import { Colors, createShadow } from "../constants/Colors";

interface EventCardProps {
  event: Event;
  compact?: boolean;
}

export function EventCard({ event, compact }: EventCardProps) {
  const navigateToDetail = () => {
    router.push(`/(tabs)/events/${event.id}`);
  };

  const getEventIcon = (type: Event["type"]) => {
    switch (type) {
      case "party":
        return "party-popper";
      case "drinks":
        return "glass-cocktail";
      case "dinner":
        return "food-variant";
      case "concert":
        return "music";
      default:
        return "calendar";
    }
  };

  if (compact) {
    return (
      <Pressable onPress={navigateToDetail}>
        <Surface style={[styles.compactCard, createShadow(4)]}>
          <View style={styles.compactContent}>
            <MaterialCommunityIcons
              name={getEventIcon(event.type)}
              size={24}
              color={Colors.primary.main}
            />
            <View style={styles.compactInfo}>
              <Text variant="titleMedium" numberOfLines={1}>
                {event.title}
              </Text>
              <Text
                variant="bodySmall"
                style={{ color: Colors.text.secondary }}
              >
                {format(event.date, "MMM d, h:mm a")}
              </Text>
            </View>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={Colors.text.secondary}
          />
        </Surface>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={navigateToDetail}>
      <Surface style={[styles.card, createShadow(8)]}>
        <Image source={{ uri: event.imageUrl }} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Chip
              icon={() => (
                <MaterialCommunityIcons
                  name={getEventIcon(event.type)}
                  size={16}
                  color={Colors.primary.main}
                />
              )}
              style={styles.chip}
            >
              {event.type}
            </Chip>
            <Text variant="labelSmall" style={styles.date}>
              {format(event.date, "MMM d, h:mm a")}
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text variant="titleLarge" style={styles.title}>
              {event.title}
            </Text>
            <Text variant="bodyMedium" style={styles.location}>
              {event.location}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.host}>
              <Avatar.Image size={24} source={{ uri: event.host.avatarUrl }} />
              <Text variant="labelMedium" style={styles.hostName}>
                {event.host.name}
              </Text>
            </View>
            <View style={styles.attendees}>
              <MaterialCommunityIcons
                name="account-group"
                size={20}
                color={Colors.text.secondary}
              />
              <Text variant="labelMedium" style={styles.attendeesText}>
                {event.attendees}/{event.maxAttendees}
              </Text>
            </View>
          </View>
        </View>
      </Surface>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  compactCard: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  compactContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  compactInfo: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  chip: {
    backgroundColor: Colors.background.primary + "E6",
  },
  date: {
    color: Colors.background.primary,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    color: Colors.background.primary,
    marginBottom: 4,
  },
  location: {
    color: Colors.background.primary + "E6",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  host: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  hostName: {
    color: Colors.background.primary,
  },
  attendees: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  attendeesText: {
    color: Colors.background.primary,
  },
});

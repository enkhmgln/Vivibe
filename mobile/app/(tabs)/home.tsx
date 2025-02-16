import { ScrollView, View, Image, Pressable } from "react-native";
import { Text, IconButton, Chip, Surface } from "react-native-paper";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tw } from "../../lib/tailwind";

const CATEGORIES = ["Discover", "Events", "News", "Podcasts"];

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between px-5 pt-14 pb-4`}>
        <Text variant="titleLarge" style={tw`font-bold text-gray-900`}>
          Home Feed
        </Text>
        <View style={tw`flex-row gap-3`}>
          <IconButton icon="bell-outline" size={22} style={tw`m-0`} />
          <IconButton icon="calendar-outline" size={22} style={tw`m-0`} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`px-5`}
        >
          <View style={tw`flex-row gap-3 mb-6`}>
            {CATEGORIES.map((category, index) => (
              <Chip
                key={category}
                selected={index === 0}
                style={[
                  tw`rounded-full py-0.5`,
                  index === 0 ? tw`bg-[#4CAF50]` : tw`bg-gray-100 border-0`,
                ]}
                textStyle={[
                  tw`text-sm`,
                  index === 0 ? tw`text-white` : tw`text-gray-800`,
                ]}
              >
                {category}
              </Chip>
            ))}
          </View>
        </ScrollView>

        {/* Latest Events */}
        <View style={tw`px-5`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text variant="titleMedium" style={tw`font-semibold text-gray-900`}>
              Latest Events
            </Text>
            <Text variant="bodyMedium" style={tw`text-gray-500`}>
              See all
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`gap-4 p-4 pl-0`}
          >
            {[1, 2].map((i) => (
              <Surface
                key={i}
                style={tw`w-72 rounded-2xl overflow-hidden bg-white shadow-sm`}
              >
                <Image
                  source={{ uri: "https://picsum.photos/300/200" }}
                  style={tw`w-full h-40`}
                  resizeMode="cover"
                />{" "}
                <View
                  style={tw`absolute top-4 max-w-12 left-4 bg-black rounded-lg px-2 py-1`}
                >
                  <Text style={tw`text-white text-xs italic`}>
                    <Text style={tw`font-bold text-lg text-white`}>20</Text> May
                  </Text>
                </View>
                <View style={tw`p-4`}>
                  <Text style={tw`font-semibold text-gray-900 text-lg mb-1`}>
                    Satellite mega festival for designers
                  </Text>
                  <Text style={tw`text-gray-500 text-sm mb-3`}>
                    Thu 26 May, 09:00 am
                  </Text>
                  <View style={tw`flex-row items-center gap-2`}>
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={16}
                      color="#6B7280"
                    />
                    <Text style={tw`text-gray-500 text-sm flex-1`}>
                      No 24 Lekki road Ajah
                    </Text>
                  </View>
                  <View style={tw`flex-row gap-2 mt-3`}>
                    <Chip style={tw`bg-gray-100 rounded-full`}>
                      <Text style={tw`text-xs`}>Physical</Text>
                    </Chip>
                    <Chip style={tw`bg-gray-100 rounded-full`}>
                      <Text style={tw`text-xs`}>Free</Text>
                    </Chip>
                  </View>
                </View>
              </Surface>
            ))}
          </ScrollView>
        </View>

        {/* Events near you */}
        <View style={tw`mt-6 px-5`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text variant="titleMedium" style={tw`font-semibold text-gray-900`}>
              Events near you
            </Text>
            <Text variant="bodyMedium" style={tw`text-gray-500`}>
              See all
            </Text>
          </View>
          <View style={tw`gap-4`}>
            {[1, 2].map((i) => (
              <Surface
                key={i}
                style={tw`rounded-xl overflow-hidden bg-white shadow-sm`}
              >
                <Pressable style={tw`flex-row p-3`}>
                  <Image
                    source={{ uri: "https://picsum.photos/100" }}
                    style={tw`w-20 h-20 rounded-lg`}
                  />
                  <View style={tw`flex-1 ml-3`}>
                    <Text style={tw`font-semibold text-gray-900 mb-1`}>
                      Dance party at the top of the town - 2022
                    </Text>
                    <Text style={tw`text-gray-500 text-sm mb-2`}>
                      Thu 26 May, 10pm
                    </Text>
                    <View style={tw`flex-row items-center gap-2`}>
                      <MaterialCommunityIcons
                        name="map-marker"
                        size={16}
                        color="#6B7280"
                      />
                      <Text style={tw`text-gray-500 text-sm`}>Google meet</Text>
                      <View style={tw`ml-auto`}>
                        <Chip style={tw`bg-gray-100 rounded-full`}>
                          <Text style={tw`text-xs`}>Free</Text>
                        </Chip>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </Surface>
            ))}
          </View>
        </View>

        {/* Most Popular News */}
        <View style={tw`mt-6 px-5 pb-24`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text variant="titleMedium" style={tw`font-semibold text-gray-900`}>
              Most Popular News
            </Text>
            <Text variant="bodyMedium" style={tw`text-gray-500`}>
              See all
            </Text>
          </View>
          <Surface style={tw`rounded-xl overflow-hidden bg-white shadow-sm`}>
            <Image
              source={{ uri: "https://picsum.photos/400/200" }}
              style={tw`w-full h-48`}
              resizeMode="cover"
            />
            <View style={tw`p-4`}>
              <Text style={tw`font-semibold text-gray-900 text-base mb-2`}>
                Buhari Tells gunmen to surrender or die a painful death at their
                own Whitehouse and...
              </Text>
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-gray-500 text-sm`}>
                  1hr 5min read • 2d
                </Text>
                <View style={tw`flex-row gap-2`}>
                  <IconButton
                    icon="thumb-up-outline"
                    size={20}
                    style={tw`m-0`}
                  />
                  <IconButton
                    icon="bookmark-outline"
                    size={20}
                    style={tw`m-0`}
                  />
                </View>
              </View>
            </View>
          </Surface>
        </View>
      </ScrollView>
    </View>
  );
}

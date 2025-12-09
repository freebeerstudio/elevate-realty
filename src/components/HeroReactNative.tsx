/**
 * Hero Component - React Native + NativeWind Approach
 *
 * This shows how the SAME design pattern translates to mobile.
 * The structure is identical, only the primitives change.
 *
 * Key differences:
 * 1. div → View, p → Text, img → Image
 * 2. CSS classes → NativeWind (Tailwind for RN) or StyleSheet
 * 3. Framer Motion → React Native Reanimated
 * 4. No :hover states (replaced with Pressable feedback)
 *
 * This demonstrates the PORTABLE PATTERN concept:
 * - Same visual hierarchy
 * - Same content structure
 * - Same animation timing
 * - Different implementation primitives
 */

// NOTE: This is pseudocode for demonstration - won't run without RN setup

/*
import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import Animated, { FadeInUp, FadeIn } from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowRight, Play, MapPin, Star } from 'lucide-react-native'

// Same design tokens, different format
const colors = {
  forest: '#1a3a3a',
  forestLight: '#2a5454',
  gold: '#d4a853',
  cream: '#faf8f5',
  charcoal: '#1c1c1c',
  warmGray: '#6b6560',
}

// NativeWind allows Tailwind syntax
// Or use StyleSheet.create() for vanilla RN

export function HeroMobile() {
  return (
    <ScrollView className="flex-1 bg-cream">
      <View className="min-h-screen px-6 pt-20 pb-10">

        {/* Background gradient *}
        <LinearGradient
          colors={[colors.cream, '#f0ede8']}
          className="absolute inset-0"
        />

        {/* Trust badge *}
        <Animated.View
          entering={FadeInUp.delay(200).duration(600)}
          className="flex-row items-center gap-2 bg-forest/5 px-4 py-2 rounded-full self-start"
        >
          <Star size={14} color={colors.gold} />
          <Text className="text-xs font-medium text-forest">
            Trusted by 500+ families
          </Text>
        </Animated.View>

        {/* Headline *}
        <Animated.Text
          entering={FadeInUp.delay(300).duration(800)}
          className="mt-6 text-4xl font-display font-medium text-charcoal"
        >
          Your Journey to the{' '}
          <Text className="text-forest">Perfect Home</Text>
          {'\n'}Starts Here
        </Animated.Text>

        {/* Subheadline *}
        <Animated.Text
          entering={FadeInUp.delay(500).duration(600)}
          className="mt-4 text-base text-warm-gray leading-relaxed"
        >
          Elevate Real Estate Group delivers personalized solutions for
          buying and selling homes in Springfield.
        </Animated.Text>

        {/* CTAs - Stack vertically on mobile *}
        <Animated.View
          entering={FadeInUp.delay(700).duration(600)}
          className="mt-8 gap-3"
        >
          <Pressable
            className="flex-row items-center justify-center gap-2 bg-forest py-4 px-6 rounded-xl active:opacity-80"
            onPress={() => {}}
          >
            <Text className="text-white font-semibold">Start Your Search</Text>
            <ArrowRight size={18} color="white" />
          </Pressable>

          <Pressable
            className="flex-row items-center justify-center gap-2 border-2 border-cream-dark py-4 px-6 rounded-xl active:bg-cream-dark/50"
            onPress={() => {}}
          >
            <Play size={18} color={colors.charcoal} />
            <Text className="font-medium text-charcoal">Watch Our Story</Text>
          </Pressable>
        </Animated.View>

        {/* Stats - Horizontal scroll on mobile *}
        <Animated.View
          entering={FadeInUp.delay(900).duration(600)}
          className="mt-10 pt-6 border-t border-cream-dark"
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-6">
              {[
                { value: '$100M+', label: 'In Sales' },
                { value: '500+', label: 'Families' },
                { value: '7', label: 'Cities' },
              ].map((stat) => (
                <View key={stat.label} className="items-center">
                  <Text className="text-2xl font-display font-semibold text-forest">
                    {stat.value}
                  </Text>
                  <Text className="text-xs uppercase tracking-wider text-warm-gray mt-1">
                    {stat.label}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </Animated.View>

        {/* Hero image *}
        <Animated.View
          entering={FadeIn.delay(400).duration(1000)}
          className="mt-8 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9' }}
            className="w-full h-64"
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', `${colors.forest}66`]}
            className="absolute inset-0"
          />

          {/* Floating card *}
          <View className="absolute bottom-4 left-4 flex-row items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-lg">
            <MapPin size={20} color={colors.gold} />
            <View>
              <Text className="font-semibold text-charcoal">Springfield, MO</Text>
              <Text className="text-sm text-warm-gray">& Surrounding</Text>
            </View>
          </View>
        </Animated.View>

      </View>
    </ScrollView>
  )
}
*/

// This file is documentation showing the pattern translation
// The actual component requires React Native environment

export const HeroReactNativePattern = `
PATTERN STRUCTURE (Same across all platforms):

1. BACKGROUND LAYER
   - Web: div with CSS gradients
   - RN: LinearGradient component

2. TRUST BADGE
   - Web: span with flex, rounded-full
   - RN: View with flexDirection: 'row', borderRadius

3. HEADLINE
   - Web: h1 with font-display class
   - RN: Text with fontFamily: 'PlayfairDisplay'

4. SUBHEADLINE
   - Web: p with text-lg
   - RN: Text with fontSize: 16

5. CTA GROUP
   - Web: flex gap-4, :hover states
   - RN: View gap-3, Pressable with active states

6. STATS ROW
   - Web: flex with dividers
   - RN: horizontal ScrollView for mobile

7. HERO IMAGE
   - Web: img with object-cover, overlay div
   - RN: Image with resizeMode, LinearGradient overlay

8. FLOATING CARD
   - Web: absolute positioning, shadow-xl
   - RN: position: 'absolute', shadowOpacity

The VISUAL HIERARCHY and TIMING remain constant.
Only the implementation primitives change.
`

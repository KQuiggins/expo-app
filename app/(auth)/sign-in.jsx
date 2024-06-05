import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

import { images } from '../../constants'


const SignInPage = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.WebDev}
            resizeMode='contain'
            className="h-[80px] w-[132px] "
          />
          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">Log in to DevSchool</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignInPage

const styles = StyleSheet.create({})
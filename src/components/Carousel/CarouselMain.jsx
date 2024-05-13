import React from "react";

import { Dimensions, Image, View } from "react-native";
import Carousel,{ParallaxImage} from "react-native-reanimated-carousel";

function CarouselMain() {
  const data = [
    {
      url: "https://symbiosbroadband.net/wp-content/uploads/slider/cache/29e6cc4d1b1cb37f89751ea9c76b42d9/dedicated-internet-.jpg",
    },
    {
      url: "https://symbiosbroadband.net/wp-content/uploads/slider/cache/0289b6d1ff948ba96e75cafa9a74598e/symbios-banner-4.jpg",
    },
    {
      url: "https://symbiosbroadband.net/wp-content/uploads/slider/cache/1fd41da4b571b4efcf2d456a5433b6df/test.webp",
    },
    {
      url: "https://symbiosbroadband.net/wp-content/uploads/slider/cache/715ca52e7656af97d8b0c5f31b911f3d/getting-connection.jpg",
    },
    {
      url: "https://symbiosbroadband.net/wp-content/uploads/slider/cache/c22034a1794a5b503392ef653732d970/internet-plans.jpg",
    },
  ];

  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 ,}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => index}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              padding:5,
              justifyContent: "center",
         
            }}
          >
            <Image
              source={{ uri:data[index].url}}
              style={{ width: "100%", height: "100%",borderRadius:10,objectFit:'cover' }}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
}

export default CarouselMain;

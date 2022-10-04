import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Upload = () => {

    const [imagefront, setImagefront] = useState(
        'https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Downl' +
        'oad-Free.jpg'
    );
    const [showoption, setShowoption] = useState(false)
    // const [showoptiontwo, setShowoptiontwo] = useState(false)

    const [idproof, setIdproof] = useState('')

    const openGalleryFront = () => {
        ImagePicker
            .openPicker({width: 100, height: 100, cropping: true})
            .then(imagefront => {
                console.log(imagefront);
                setShowoption(false)
                setImagefront(imagefront.path)
            });
    }

    return (

        <View style={styles.main}>

            <View
                style={{
                    alignSelf: 'center',
                    marginVertical: 10
                }}>
                <View style={styles.border}>
                    <TouchableOpacity onPress={() => openGalleryFront()}>
                        <View>
                            <Image source={require('./assets/camera.png')} style={styles.camera}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        {
                            imagefront && <ImageBackground
                                    source={{
                                        uri: imagefront
                                    }}
                                    style={styles.dp}/>
                        }
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );

}
export default Upload;
const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        justifyContent: "center"
    },

    dp: {
        borderRadius: 25,
        marginTop: 23,
        width: 340,
        height: 280,
        alignSelf: 'center',
        overflow: "hidden"
    },
    border: {
        width: 55,
        height: 34,
        borderRadius: 999,
        padding: 4,
        alignSelf: 'center'
    },
    camera: {
        width: 40,
        height: 34,
        alignSelf: 'center',
        // marginVertical:10,
        marginTop: 10
    },
    cross: {
        width: 28,
        height: 28,
        position: "absolute",
        zIndex: 10,
        elevation: 10,
        marginLeft: 44
    },
    imageload: {
        width: 120,
        height: 100,
        elevation: 3,
        zIndex: 3,
        position: "relative"
    }
});

import { useEffect, useRef } from "react";
import { Button } from "@chakra-ui/react";

const UploadWidget = ( { formData, setFormData }) =>{ // destructuring from probs
        // useRef hook return ref object with current property.

        const cloudinaryRef = useRef();
        const widgetRef = useRef();
        // useEffect is a hook that runs side-effect after rendering
        useEffect(() =>{
            // setting the current Cloudinary object to our ref for future reference
            cloudinaryRef.current = window.cloudinary;
            // Creating and setting the Cloudinary upload widget to our widget ref.
            // This widget will handle the image upload process.
            widgetRef.current = cloudinaryRef.current.createUploadWidget({

                // cloudName: import.meta.env.VITE_APP_CLOUD_NAME,
                // uploadPreset: import.meta.env.VITE_APP_UPLOAD_PRESET,

                cloudName: "drvh5xeuw",
                uploadPreset: "xjha8ild",



                // call-back function that's triggered after an image upload attemp.
                // check i f there's no error and the result event type is 'success'.
            }, function(error, result) {
                if(!error && result && result.event === 'success') {
                    // Extract the secure URL of the uploaded image.
                    const url = result.info.secure_url;

                    // update the state in Production Form with the new image URL.
                    // If there there existing URLs, append the new one, otherwise jsut set the new one.
                    setFormData(prev => ({
                        ...prev, // spread the previouse formdata.
                        imageUrls: prev.imageUrls ? prev.imageUrls + ',' + url : url
                    }));
                }
            });
        
        }, [])
      
      return (
        <Button
        type="button"
        onClick={() => widgetRef.current.open()}
        leftIcon={<span role="img" aria-label="paperclip">📎</span>}
        colorScheme="teal"
        variant="solid"
        size="md"
        fontSize="sm"
        px={4}
        py={2}
      >
        Attach Image
      </Button>
      
        )

    } 


   

export default UploadWidget;

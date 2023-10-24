import { useEffect, useRef } from "react";

function UploadWidget(){
    
        const cloudinaryRef = useRef();
        const widgetRef = useRef();
        useEffect(() =>{
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                cloudName: 'drvh5xeuw',
                uploadPreset: 'xjha8ild'
            }, function(error, result) {
                console.log(result)
            });
        
        
      
        //   (error, result) => {
        //     if (result.event === 'success') {
        //       setFormData({
        //         ...formData,
        //         imageUrls: formData.imageUrls
        //           ? formData.imageUrls + ',' + result.info.secure_url
        //           : result.info.secure_url,
        //       });
        //     }
        //   }
        // );
        // widget.open();
        }, [])
      
      return (
            <button onClick={() => widgetRef.current.open()}>Upload</button>
        )

    } 


   

export default UploadWidget;

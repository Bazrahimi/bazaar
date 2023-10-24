import { Image, CloudinaryContext, Transformation, ImageUpload } from 'cloudinary-react';

function UploadWidget() {
    const showWidget = () => {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'YOUR_CLOUD_NAME',
                uploadPreset: 'YOUR_UPLOAD_PRESET'
            },
            (error, result) => {
                if (result.event === 'success') {
                    console.log('Image URL: ', result.info.secure_url);
                }
            }
        );
        widget.open();
    };

    return <button onClick={showWidget}>Upload Image</button>;
}

export default UploadWidget;

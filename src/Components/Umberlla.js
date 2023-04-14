import React, { useEffect, useState } from "react";
import { YELLO_UMBERLLA_CDN } from "../config";
import yelloUmbrella from '../../Assets/Yello umbrella.png'
import PinkUmbrella from '../../Assets/Pink umbrella.png'
import BlueUmbrella from '../../Assets/Blue umbrella.png'
import uploadIcon from '../../Assets/upload_icon.svg'
import loaderIcon from '../../Assets/loader_icon.svg'
import closeIcon from '../../Assets/close_icon.svg'

const Umberlla = ({ changeBgColor }) => {

    const [umberlla, setUmberlla] = useState(yelloUmbrella)
    const [logo, setLogo] = useState()
    const [logoname, setLogoname] = useState('')
    const [buttonColor, setButtonColor] = useState('#f7c614')
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false)

    const handleImageUpload = (e) => {
        setLoading(true);
        setLogo(URL?.createObjectURL(e.target.files[0]))
        setLogoname(e.target.files)
    }

    console.log(PinkUmbrella, logo)

    const handleClick = (color) => {
        setLoading(true);
        changeBgColor(color);
    };

    useEffect(() => {
        let timeout;
        if (logo) {
            timeout = setTimeout(() => setLoading(false), 3000);
        }
        if (umberlla) {
            timeout = setTimeout(() => setLoading(false), 3000);
        }


        return () => clearTimeout(timeout);
    }, [logo,umberlla]);




    return (

        <div className="parentDiv">
            <div className="UmberllaLeft">
                {loading ? <img className="isLoadingUmberlla" src={loaderIcon} /> : (
                    <>
      
                        <img className="logo" src={logo} />
                        <img className="imageUmberlla" src={umberlla} />
                    </>)
                }
            </div>
            <div className="umberllaRight">
                <h1 className="Header">Custom umbrella</h1>

                <div className="colorpicker">
                    <div className={"yelloColor"}  onClick={() => {
                        setLoading(true);
                        setUmberlla(yelloUmbrella);
                        setButtonColor('#f7c614')
                        handleClick('#faffd1')
                    }} />
                    <div className="pinkColor" onClick={() => {
                        setLoading(true);
                        setUmberlla(PinkUmbrella)
                        setButtonColor('#ff009d')
                        handleClick('#ffe8ff')
                    }} />
                    <div className="blueColor" onClick={() => {
                        setLoading(true);
                        setUmberlla(BlueUmbrella)
                        setButtonColor('#00b4e6')
                        handleClick('#edf9ff')
                    }} />
                </div>
                <div className="UploadDetails">
                    <h3>Customise your umbrella</h3>
                    <p>Upload a logo for an instant preview.</p>
                    <p>.png and .jpg files only. Max file size is 5MB.</p>
                </div>
                <div className="uploadButton" style={{ backgroundColor: buttonColor }}>
                    <input type="file" id='file' accept="image/png, image/jpeg" onChange={handleImageUpload} />
                    <label htmlFor="input" for='file' className="UploadLogo"
                    >
                        {loading ? <img className="isloadingIcon" src={loaderIcon} />
                            :
                            <img style={{ color: 'red' }} className="uploadIcon" src={uploadIcon} />}

                    </label>
                  
                    {!logo ? 'UPLOAD LOGO' : logoname[0]?.name}
                    {!logo ? <div className="clossIcon" />
                        :
                        <img src={closeIcon} className="clossIcon" onClick={() => setLogo('')} />}
                </div>
            </div>

        </div>

    )
        ;
};

export default Umberlla;

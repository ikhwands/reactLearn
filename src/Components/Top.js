import React from "react";

const Top = () => {

    function handlePesan(value){
        alert("Halaman top tampil");
        alert(value);
    }

    return(
        <a href="/" onClick={()=>handlePesan("Pesan dari Top")}>
            Halaman Top
        </a>
    );
};

export default Top;
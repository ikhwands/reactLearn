import React from "react";

const Top = () => {

    function handlePesan(){
        alert("Halaman top tampil");
    }

    return(
        <a href="/" onClick={handlePesan}>
            Halaman Top
        </a>
    );
};

export default Top;
import React from "react";
import { TfiSearch } from "react-icons/tfi";

function Search () {
    return (
        <div className="flex w-full pt-20 pb-2 justify-center items-center">
    <input
        className="border flex w-full text-center justify-center ml-2 p-1 w-36 md:w-64 outline-none custom-placeholder rounded-l-lg"
        type="text"
        placeholder="O que você deseja encontrar?"
    />
    <div className="border py-2 px-1 mr-2 my-1 md:my-0 md:mr-1 rounded-r-lg">
        <TfiSearch />
    </div>
</div>
    )
}

export default Search
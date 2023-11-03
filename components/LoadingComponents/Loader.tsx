import React from "react";
import { LineWave } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex justify-center my-[200px]">
            <LineWave
                height="150"
                width="150"
                color=""
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor="#f5ba4c"
                middleLineColor="#e1476d"
                lastLineColor="#58b869"
            />
        </div>
    );
};

export default Loader;

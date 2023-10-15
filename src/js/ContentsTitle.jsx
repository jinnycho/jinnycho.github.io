import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {
    subCategoryIDToTitleIDs,
    contentsTitleIDToValue,
} from "./Config";

export function ContentsTitle({setChosenContentTitle, chosenCategoryID, chosenSubCategoryID, chosenContentTitleID}) {
    const { categoryIDPath, subCategoryIDPath, contentTitleIDPath } = useParams();
    useEffect(() => {
        if (contentTitleIDPath !== undefined) {
            setChosenContentTitle(contentTitleIDPath);
        }
      }, [contentTitleIDPath]);    

    const handleContentsTitleClick = (chosenContentTitleID) => {
        setChosenContentTitle(chosenContentTitleID);
    };

    return (
        <>
        {Object.keys(subCategoryIDToTitleIDs).map((subCategoryID) => {
            if (chosenSubCategoryID === subCategoryID && chosenContentTitleID == null) {
                const titleIDsGivenSubCategory = subCategoryIDToTitleIDs[chosenSubCategoryID];
                return (titleIDsGivenSubCategory.map((titleID) => {
                    const contentTitle = contentsTitleIDToValue[titleID];
                    return (
                        <div className='contents-rectangle' key={ titleID }>
                            <Link 
                                to={`/${categoryIDPath}/${subCategoryID}/${titleID}`}
                            >
                                <div className='content-title'
                                    onClick={() => handleContentsTitleClick(titleID)}> {contentTitle}
                                </div>
                            </Link>
                        </div>
                    );
                }));
            }
        })}
        { (chosenCategoryID === null || chosenSubCategoryID === null) ? <div className='contents-rectangle'/> :  "" }
        </>
    );
}
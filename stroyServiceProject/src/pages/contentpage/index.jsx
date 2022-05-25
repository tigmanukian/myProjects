import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHtmlContent } from "../../services";

function ContentPage() {
    let { folder, file } = useParams();
    let [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const loadHtml = async () => {
            var result = await getHtmlContent(folder, file);
            setHtmlContent(result);
        };

        loadHtml();

    }, [folder, file])


    return (
        <div className="m-4">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>);

}

export default ContentPage;
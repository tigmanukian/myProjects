import React, { useEffect, useState } from 'react'
import Slider from '../../common/slider';
import { getHomeConfiguration } from '../../services';
import LatestProjects from './latestprojectssection';
import OurServicesSection from './ourservicessection';
import StatisticsSection from './statisticssection';
import WhyChooseUsSection from './whychooseussection';
import AboutCompany from './aboutcompanysection';
import ClientSay from './clientsaysection';
import ClientLogos from './clientslogosection';


function Home() {
    const [sliderInfo, setSliderInfo] = useState([]);
    const [ourServices, setOurServices] = useState({ header: "", description: "", serviceList: [] });
    const [whyChooseUs, setWhyChooseUs] = useState({ header: "", description: "", items: [] });
    const [statistics, setStatistics] = useState(
        {
            roadBuilt: { lengthKm: null, label: "" },
            successProject: { count: null, label: "" },
            happyClient: { count: null, label: "" },
            employees: { count: null, label: "" }
        }

    );
    const [latestProjects, setLatestProjects] = useState({ header: "", description: "", images: [] });
    const [aboutCompany, setAboutCompany] = useState({ header: "", description: "" });
    const [clientSay, setClientSay] = useState({ header: "", description: "" });
    const [clientLogos, setClientLogos] = useState({ logos: [] });
    useEffect(() => {
        const fetchData = async function () {
            const result = await getHomeConfiguration();

            setSliderInfo(result.slides);
            setOurServices(result.ourServices);
            setWhyChooseUs(result.whyChooseUs);
            setStatistics(result.statistics);
            setLatestProjects(result.latestProjects);
            setAboutCompany(result.aboutCompany);
            setClientSay(result.clientSay)
            setClientLogos(result.clientLogo)
        }

        fetchData();
    }, []);

    return (
        <>
            <Slider items={sliderInfo} />
            <OurServicesSection ourServices={ourServices} />
            <WhyChooseUsSection whyChooseUs={whyChooseUs} />
            <StatisticsSection statistics={statistics} />
            <LatestProjects latestProjects={latestProjects} />
            <AboutCompany aboutCompany={aboutCompany} />
            <ClientSay clientSay={clientSay} />
            <ClientLogos clientLogos={clientLogos} />
        </>
    );
}
export default Home;
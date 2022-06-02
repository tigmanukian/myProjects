
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import "./index.scss";

function StatisticsSection() {

	const coutObj = {
        "roadBuilt": {
            "lengthKm": 115,
            "label": "Students"
        },
        "successProject": {
            "count": 25,
            "label": "Donation"
        },
        "happyClient": {
            "count": 18,
            "label": "Now working students"
        },
        "employees": {
            "count": 10,
            "label": "Partners"
        }
    };


    const roadBuilt = coutObj.roadBuilt;
    const projCount = coutObj.successProject;
    const clientCount = coutObj.happyClient;
    const employees = coutObj.employees;

// const coutObj =[
// 	{
// 		"lengthKm": 1500,
// 		"label": "ПОСТРОЕНО ДОРОГ"
// 	},
// 	{
// 		"count": 150,
// 		"label": "СДАННЫХ ПРОЕКТОВ"
// 	},
// 	{
// 		"count": 50,
// 		"label": "ДОВОЛЬНЫХ КЛИЕНТОВ"
// 	},
// 	{
// 		"count": 20,
// 		"label": "СОТРУДНИКОВ"
// 	}
// ]
	
    return (
        <div className="ss-statistics pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <StatisticsItem value={roadBuilt.lengthKm} label={roadBuilt.label} suffix="+"  />
                    </div>
                    <div className="col">
                        <StatisticsItem value={projCount.count} label={projCount.label} suffix="K"  />
                    </div>
                    <div className="col">
                        <StatisticsItem value={clientCount.count} label={clientCount.label} suffix="+" />
                    </div>
                    <div className="col">
                        <StatisticsItem value={employees.count} label={employees.label} suffix=""  />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatisticsItem(props) {

    return (
        <div className="ss-statistics-item">
            <div className="row">
                <div className="col">
                    <div className="fw-bolder fs-2">
                        <StatisticsCountUp value={props.value} suffix={props.suffix} />
                    </div>
                    <div className="fw-bold fs-6 text-nowrap">{props.label}</div>
                </div>
                <div className="col mt-auto mb-auto">
                    
                </div>
            </div>
        </div>
    );
}

function StatisticsCountUp(props) {
    const { ref, inView } = useInView();
    return (
        <div ref={ref}>
            {inView ? <CountUp end={props.value} suffix={props.suffix ?? ''} duration={1} /> : null}
        </div>
    );
}

export default StatisticsSection;
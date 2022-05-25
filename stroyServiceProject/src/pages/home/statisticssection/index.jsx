import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faClipboardList, faPeopleGroup, faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import "./index.scss";

function StatisticsSection(props) {
    var roadBuilt = props.statistics.roadBuilt;
    var projCount = props.statistics.successProject;
    var clientCount = props.statistics.happyClient;
    var employees = props.statistics.employees;

    return (
        <div className="ss-statistics pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <StatisticsItem value={roadBuilt.lengthKm} label={roadBuilt.label} suffix="км+" icon={faRoad} />
                    </div>
                    <div className="col">
                        <StatisticsItem value={projCount.count} label={projCount.label} suffix="+" icon={faClipboardList} />
                    </div>
                    <div className="col">
                        <StatisticsItem value={clientCount.count} label={clientCount.label} suffix="+" icon={faPeopleGroup} />
                    </div>
                    <div className="col">
                        <StatisticsItem value={employees.count} label={employees.label} suffix="" icon={faPersonDigging} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatisticsItem(props) {

    return (
        <div className="ss-statistics-item text-nowrap">
            <div className="row">
                <div className="col">
                    <div className="fw-bolder fs-2">
                        <StatisticsCountUp value={props.value} suffix={props.suffix} />
                    </div>
                    <div className="fw-bold fs-6 text-nowrap">{props.label}</div>
                </div>
                <div className="col mt-auto mb-auto">
                    <div className="fs-1">
                        <FontAwesomeIcon icon={props.icon} />
                    </div>
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
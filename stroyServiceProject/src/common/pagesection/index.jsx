import './index.scss'

function PageSection(props) {
    return (<div className={"ss-page-section " + (props.alternate ? "bg-alternate" : "bg-decoration")}>
        <div>
            {props.header && <>
                <h3>{props.header}</h3>
                <PageSectionSeperator />
            </>}
            {props.description && <p className="text-muted">{props.description}</p>}
            <div>{props.children}</div>
        </div>
    </div>);
}

function PageSectionSeperator() {
    return (
        <div className="wt-separator-outer">
            <div className="wt-separator style-square">
                <span className="separator-left"></span>
                <span className="separator-right"></span>
            </div>
        </div>
    );
}

export default PageSection;
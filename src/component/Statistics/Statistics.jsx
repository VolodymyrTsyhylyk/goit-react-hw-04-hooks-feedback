import React from "react";
import PropTypes from "prop-types";
import { StatisticsList, StatisticsListItem} from "./Statistics.styles";

function Statistics({options, values, total, positive}) {
    return (
        <StatisticsList>
            {options.map((option) => (
                <StatisticsListItem key={option}>
                    {option}: {values[option]}</StatisticsListItem>
            ))}
            <StatisticsListItem key={"total"}>{"Total"}: {total}</StatisticsListItem>
            <StatisticsListItem key={"positive"}>{"Positive feedback"}: {positive}%</StatisticsListItem>
        </StatisticsList>
    );
}

Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.object,
    total: PropTypes.number,
    positive: PropTypes.number,
};

export default Statistics;
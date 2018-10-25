import React from 'react';
import ContestPreview from './ContestPreview';
const ContestList = ({ contests }) => (
    <div className="ContestList">
        <div>
          {contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
    </div>
);

ContestList.propTypes = {
    contests: React.PropTypes.array
}
export default ContestList;
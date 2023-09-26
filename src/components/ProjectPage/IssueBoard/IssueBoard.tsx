import React, { useEffect, useState } from "react";
import axios from "axios";
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';

import './IssueBoard.css';

interface Issue {
  id: string;
  summary: string;
  priority: number;
  createdOn: string;
}

const IssueBoard: React.FC = () => {
  const [issueList, setIssueList] = useState<Issue[]>([]);

  useEffect(() => {
    axios
      .get<Issue[]>("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue")
      .then((response) => {
        setIssueList(response.data);
      });
  }, []);

  return (
    <div className="issue-container">
      {issueList.map((issue) => (
        <ClayCard key={issue.id}>
          <ClayCard.Body>
            <div>
              <div>{issue.id}</div>
              <div>{issue.createdOn}</div>
            </div>
            <div className="issue-summary">{issue.summary}</div>
          </ClayCard.Body>
          <div className={`priority-${issue.priority}`}>
            <span className="priority-tag">
              {issue.priority === 1 && <ClayLabel className="label label-inverse-danger" displayType="danger">High</ClayLabel>}
              {issue.priority === 2 && <ClayLabel className="label label-inverse-warning" displayType="warning">Medium</ClayLabel>}
              {issue.priority === 3 && <ClayLabel className="label label-inverse-success" displayType="success">Low</ClayLabel>}
            </span>
          </div>
        </ClayCard>
      ))}
    </div>
  );
};

export default IssueBoard;
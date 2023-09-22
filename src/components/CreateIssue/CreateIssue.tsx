import React from 'react';

const CreateIssue: React.FC = () => {
  return (
    <div>
      <h2>Create Issue</h2>
      <form>
        <div>
          <label htmlFor="issueTitle">Issue Title:</label>
          <input type="text" id="issueTitle" name="issueTitle" />
        </div>
        <button type="submit">Create Issue</button>
      </form>
    </div>
  );
};

export default CreateIssue;

import React, { PropTypes } from 'react';

const SignPlaceholderComment = ({
  query,
}) => {
  let jsonMetadata = {};
  try {
    jsonMetadata = JSON.parse(query.json_metadata);
  } catch (e) {
    jsonMetadata = {};
  }
  return (
    <div className="operation-content">
      {query.parent_author && query.parent_permlink
        ? <p>Do you want to reply on <b>@{query.parent_author}</b>'s post?</p>
        : <p>Do you want to add new post?</p>
      }
      <table className="table text-left">
        <tbody>
          {query.title &&
          <tr>
            <td className="label"><b>Title</b></td>
            <td>{query.title}</td>
          </tr>
          }
          {query.body &&
          <tr>
            <td className="label"><b>Body</b></td>
            <td>{query.body}</td>
          </tr>
          }
          {query.json_metadata &&
          <tr>
            <td className="label"><b>Json Metadata</b></td>
            <td>
              <pre>{JSON.stringify(jsonMetadata, null, 2)}</pre>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

SignPlaceholderComment.propTypes = {
  query: PropTypes.shape(),
};

export default SignPlaceholderComment;

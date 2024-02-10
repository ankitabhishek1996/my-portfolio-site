export const DownloadButton = ({ resumeLink }) => {
    return (
      <div className="download-resume">
        <a href={resumeLink} download>
          <button type="button">Download My Resume</button>
        </a>
      </div>
    );
  };
  
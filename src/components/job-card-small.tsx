export default function JobCardSmall() {
  return (
    <div class="job-overview-card">
      <div class="job-card overview-card">
        <div class="overview-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style="background-color:#f76754"
          >
            <path d="M0 .5h4.2v23H0z" fill="#042b48" data-original="#212121" />
            <path
              d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
              fill="#fefefe"
              data-original="#f4511e"
            />
          </svg>
          <div class="overview-detail">
            <div class="job-card-title">Sr. Product Designer</div>
            <div class="job-card-subtitle">
              1901 Thornridge Cir.Shiloh, Hawaii.
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="heart feather feather-heart"
          >
            <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
          </svg>
        </div>
        <div class="job-overview-buttons">
          <div class="search-buttons time-button">Full Time</div>
          <div class="search-buttons level-button">Senior Level</div>
          <div class="job-stat">New</div>
          <div class="job-day">4d</div>
        </div>
      </div>
    </div>
  );
}

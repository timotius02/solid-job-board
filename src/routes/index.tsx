import { For } from "solid-js";
import { refetchRouteData, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import JobAlert from "~/components/job-alert";
import JobCard from "~/components/job-card";
import JobFilter from "~/components/job-filter";
import { SearchMenu } from "~/components/search-menu";
import { type VoidComponent } from "solid-js";
import { trpc } from "~/utils/trpc";
import { getSession } from "@auth/solid-start";
import { authOpts } from "./api/auth/[...solidauth]";
import { filters, jobsData } from "~/db/data";
import Header from "~/components/header";



export const routeData = () => {
  return createServerData$(async (_, { request }) => {
    return await getSession(request, authOpts);
  });
};

const Home: VoidComponent = () => {
  const session = useRouteData<typeof routeData>();
  const headerData = trpc.headerData.useQuery(undefined, {
    get enabled() {
      return !!session()?.user;
    },
  });

  return (
   <div class="m-auto flex h-full flex-col overflow-hidden bg-gray-50">
      <Header isLoading={headerData.isLoading || session.loading} user={headerData.data}  />
    <div class="w-full flex flex-col scroll-smooth px-8 py-10">
      <SearchMenu />
      <div class="main-container">
        <div class="search-type">
          <JobAlert />
          <For each={filters}>{(filter) => <JobFilter {...filter} />}</For>
        </div>
        <div class="searched-jobs">
          <div class="searched-bar">
            <div class="searched-show">Showing 46 Jobs</div>
            <div class="searched-sort">
              Sort by: <span class="post-time">Newest Post </span>
              <span class="menu-icon">▼</span>
            </div>
          </div>
          <div class="job-cards">
            <For each={jobsData}>
              {(job) => (
                <JobCard
                  name={job.title}
                  description={job.description}
                  tags={job.tags}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
                </div>

  );
}

export default Home;

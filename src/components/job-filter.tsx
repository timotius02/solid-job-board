import { For } from "solid-js";

export interface JobFilterProps {
  title: string;
  choices: {
    name: string;
    count: number;
  }[];
}

function filterLabel(filterName: string, index: number) {
  return `${filterName.toLowerCase().replaceAll(" ", "-")}-choice-${index}`;
}

export default function JobFilter(props: JobFilterProps) {
  return (
    <div class="job-time">
      <div class="job-time-title">{props.title}</div>
      <div class="job-wrapper">
        <For each={props.choices}>
          {(choice, index) => (
            <div class="type-container">
              <input
                id={filterLabel(props.title, index())}
                type="checkbox"
                class="job-style"
              />
              <label for={filterLabel(props.title, index())}>
                {choice.name}
              </label>
              <span class="job-number">{choice.count}</span>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

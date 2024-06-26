import { useDispatch, useSelector } from "react-redux";
import JobList from "./JobList";
import DropdownInputCombo from "./components/dropDown/DropdownInputCombo";
import Card from "./components/jobCard/Card";
import { fetchJobDetails } from "./redux/actions/jobActions";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobDetails());
  }, [dispatch]);
  const jobDetails = useSelector((state) => state.jobDetails.filteredDetails);
  console.log(jobDetails);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 py-2">
        <DropdownInputCombo
          placeholder="Roles"
          options={[
            "backend",
            "frontend",
            "fullstack",
            "ios",
            "flutter",
            "react native",
            "android",
            "front end",
            "techlead",
          ]}
          filterKey={"jobRole"}
        />
        <DropdownInputCombo
          placeholder="Number of Employees"
          options={[
            "1-10",
            "11-20",
            "21-50",
            "51-100",
            "101-200",
            "201-500",
            "500+",
          ]}
          filterKey={"numberOfEmployees"}
        />
        <DropdownInputCombo
          placeholder="Experience"
          options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          filterKey={"minExp"}
        />
        <DropdownInputCombo
          placeholder="Remote"
          options={["remote", "delhi ncr", "chennai", "banglore"]}
          filterKey={"location"}
        />
        <DropdownInputCombo
          placeholder="Minimum Base Pay Salary"
          options={["0", "10", "20", "30", "40", "50", "60", "70"]}
          filterKey={"minJdSalary"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 pt-10">
        {jobDetails?.jdList?.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}

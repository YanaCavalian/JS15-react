import { useForm } from "react-hook-form";
import { Input } from "./components/input";

export const App = () => {
  const form = useForm({});

  const onSubmit = (data) => {
    form.reset();
    console.log("Data:", data);
  };

  return (
    <main>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <label>
          Name:
          <Input {...form.register("name", { required: "Required name" })} />
        </label>
        {form.formState.errors.name && (
          <div>{form.formState.errors.name.message}</div>
        )}
        <br />
        <label>
          City:
          <Input {...form.register("city", { required: "Required city" })} />
        </label>
        {form.formState.errors.city && (
          <div>{form.formState.errors.city.message}</div>
        )}
        <br />
        <br />
        <label>
          University:
          <Input
            {...form.register("university", {
              required: "Required university",
            })}
          />
        </label>
        {form.formState.errors.university && (
          <div>{form.formState.errors.university.message}</div>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default App;

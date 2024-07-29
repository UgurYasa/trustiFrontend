import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getToDos, postPost } from "../services/try";
import ReactQueryProvider from "../services/Provider";
import { useGetTodos, usePostPost } from "../services/hooks/todos";

const Example = () => {
  const onSuccess = () => console.log("success");
  const onError = (error) => console.log(error.message);
  const { isLoading, isError, isFetched, data, error, dataUpdatedAt } =
    useGetTodos(onSuccess, onError);
  const { mutate, status } = usePostPost(onSuccess, onError);

  // const { isLoading, isError, isFetched, data, error, dataUpdatedAt } =
  // useQuery({
  //   queryKey: ["todos"],
  //   queryFn: getToDos,
  // });

  // const { mutate } = useMutation({
  //   mutationFn: postPost,
  //   onError: (error) => console.log(error.message),
  //   onSuccess: () => console.log("success"),
  // });
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div>dataUpdatedAt: {dataUpdatedAt}</div>
      {isError && <div>Error: {error.message}</div>}
      {isFetched && (
        <div>
          {data.slice(0, 5).map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      )}
      <div>{status}</div>
      <button
        className="py-10"
        onClick={() => {
          mutate({
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          });
        }}
      >
        gönder
      </button>
    </div>
  );
};

export default function TryScreen() {
  return (
    <ReactQueryProvider>
      <Example />
    </ReactQueryProvider>
  );
}

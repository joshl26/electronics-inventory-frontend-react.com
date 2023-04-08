// import str from "../../mock_data/parts.json";
import { useGetPartsQuery } from "./partsApiSlice";
import useAuth from "../../hooks/useAuth";
import PartCard from "../../components/PartCard";

const PartsList = () => {
  const { username, isManager, isAdmin } = useAuth();

  //TODO Determnine why the first argument in useGetPartsQuery needs to be undetermined here
  const {
    data: parts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPartsQuery(undefined, {
    pollingInterval: 1500000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids, entities } = parts;

    let filteredIds;

    if (isManager || isAdmin) {
      filteredIds = [...ids];
    } else {
      filteredIds = ids.filter(
        (noteId) => entities[noteId].username === username
      );
    }

    content =
      ids?.length &&
      filteredIds.map((partId) => <PartCard key={partId} partId={partId} />);
  }

  return content;
};

export default PartsList;

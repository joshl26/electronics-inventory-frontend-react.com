// import str from "../../mock_data/parts.json";
import { useGetPartsQuery } from "./partsApiSlice";
import Part from "./Part";
import useAuth from "../../hooks/useAuth";
import classes from "./PartsList.module.scss";
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
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  // console.log(isLoading);
  // console.log(isSuccess);

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

    // console.log(filteredIds);
    // console.log(parts);

    const tableContent =
      ids?.length &&
      filteredIds.map((partId) => <PartCard key={partId} partId={partId} />);

    content = <>{tableContent}</>;
  }

  return content;
};

export default PartsList;

// const PartsList = () => {
//   const { username, isManager, isAdmin } = useAuth();

//   //TODO Determnine why the first argument in useGetPartsQuery needs to be undetermined here
//   const {
//     data: parts,
//     isLoading,
//     isSuccess,
//     isError,
//     error,
//   } = useGetPartsQuery(undefined, {
//     pollingInterval: 15000,
//     refetchOnFocus: true,
//     refetchOnMountOrArgChange: true,
//   });

//   let content;

//   // console.log(isLoading);
//   // console.log(isSuccess);

//   if (isLoading) content = <p>Loading...</p>;

//   if (isError) {
//     content = <p className="errmsg">{error?.data?.message}</p>;
//   }

//   if (isSuccess) {
//     const { ids, entities } = parts;

//     let filteredIds;

//     if (isManager || isAdmin) {
//       filteredIds = [...ids];
//     } else {
//       filteredIds = ids.filter(
//         (noteId) => entities[noteId].username === username
//       );
//     }

//     // console.log(filteredIds);
//     // console.log(parts);

//     const tableContent =
//       ids?.length &&
//       filteredIds.map((partId) => <Part key={partId} partId={partId} />);

//     content = (
//       <table className="table table--parts">
//         <thead className="table__thead">
//           <tr>
//             <th scope="col" className={`table__th ${classes.part__name}`}>
//               Part Name
//             </th>
//             <th scope="col" className="table__th part__description">
//               Description
//             </th>
//             <th scope="col" className="table__th part__qty">
//               Qty
//             </th>
//             <th scope="col" className="table__th part__type">
//               Part Type
//             </th>
//             <th scope="col" className="table__th part__username">
//               Owner
//             </th>
//             <th scope="col" className="table__th part__images">
//               Images
//             </th>
//             <th scope="col" className="table__th part__created">
//               Created
//             </th>
//             <th scope="col" className="table__th part__updated">
//               Updated
//             </th>
//             <th scope="col" className="table__th part__edit">
//               Edit
//             </th>
//           </tr>
//         </thead>
//         <tbody>{tableContent}</tbody>
//       </table>
//     );
//   }

//   return content;
// };

// export default PartsList;

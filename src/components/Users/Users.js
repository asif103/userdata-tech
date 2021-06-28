import React, { useEffect, useState, useMemo } from "react";
import Header from "./Header/Header";
import { useHistory } from "react-router";
import Paginations from "./Paginations/Paginations";
import Search from "./Search/Search";
function Users() {
  const [users, setUsers] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [totalUserCount, setTotalUserCount] = useState(localStorage.getItem("items") || 3)

  const ITEMS_PER_PAGE = 3;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const header = [
    { name: "Name", field: "name", sortable: true },
    { name: "Email", field: "email", sortable: true },
    { name: "Website", field: "website", sortable: true },
  ];
  const setTotalUserItem = (items) => {
    setTotalUserCount(items);
    localStorage.setItem("items", items);
    setTotalUserCount(localStorage.getItem("items"));
    console.log(totalUserCount)
  };

  const history = useHistory();
  const singleUser = (user) => {
    history.push(`/user/${user}`);
  };
  const usersData = useMemo(() => {
    let computedUsers = users;

    if (search) {
      computedUsers = computedUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedUsers.length);

    //Sorting users
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedUsers = computedUsers.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Current Page slice
    return computedUsers.slice(0, totalUserCount);
  }, [users, currentPage, search, sorting, totalUserCount]);
  return (
    <div>
      {/* <Paginations
        total={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      ></Paginations> */}
      <Search
        onSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />
      <button
        onClick={() => setTotalUserItem(3)}
        className="badge badge-info ml-3 text-white"
      >
        3
      </button>
      <button
        onClick={() => setTotalUserItem(5)}
        className="badge badge-info ml-3 text-white"
      >
        5
      </button>
      <button
        onClick={() => setTotalUserItem(users.length)}
        className="badge badge-info ml-3 text-white"
      >
        All
      </button>
      <table className="table">
        <Header
          headers={header}
          onSorting={(field, order) => setSorting({ field, order })}
        ></Header>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>
                <a href="#" onClick={() => singleUser(user.id)}>
                  {user.name}
                </a>
              </td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

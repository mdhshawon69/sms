import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/system";
import { useState } from "react";

export default function PaginationRounded({ setPagination }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setPagination(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        page={page}
        shape='rounded'
        onChange={handleChange}
      />
    </Stack>
  );
}

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { createTheme } from "@mui/material/styles";

export default function DataGridDemo({ theme, rows, rowClick }) {
  console.log("theme", theme.palette.mode);

  const columns = [
    { field: "id", name: "ID", width: 90 },
    {
      field: "name",
      headerName: "First name",
      width: 150,
      editable: false,
    },

    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 110,
      editable: false,
    },
  ];

  return (
    <Box sx={{ height: "100%", widows: "100%" }}>
      <DataGrid
        sx={{
          "& .MuiDataGrid-row": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#2e2e2e" : "#e0f7fa",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#585757" : "#b2ebf2",
          },
          "& .MuiDataGrid-cell": {
            color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#424242" : "#e0f7fa",
          },
        }}
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
            // paginationMode: "server",
          },
        }}
        onRowClick={(row) => {
          console.log(row);
          rowClick(row.id);
        }}
        pageSizeOptions={[5]}
        // sx={{
        //   "& .MuiDataGrid-row": { backgroundColor: "lightblue" },
        //   "& .MuiDataGrid-row:hover": { backgroundColor: "lightgreen" },
        // }}
      />
    </Box>
  );
}

// Components
import { Route, Routes } from "react-router";

// Pages
import { HomePage } from "../pages/home/home";
import { NotFoundPage } from "../pages/not-found/not-found";
import { NoteDetailsPage } from "../pages/note-details/note-details";

export function AppRouter() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/note/:slug" element={<NoteDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

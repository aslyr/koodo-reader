import { connect } from "react-redux";
import {
  handleFetchBooks,
  handleMessageBox,
  handleMessage,
  handleDeleteDialog,
  handleActionDialog,
  handleFetchBookmarks,
  handleFetchNotes,
  handleSelectedBooks,
} from "../../../store/actions";
import { stateType } from "../../../store";
import DeleteDialog from "./component";

const mapStateToProps = (state: stateType) => {
  return {
    books: state.manager.books,
    selectedBooks: state.manager.selectedBooks,
    isSelectBook: state.manager.isSelectBook,
    isOpenDeleteDialog: state.book.isOpenDeleteDialog,
    currentBook: state.book.currentBook,
    bookmarks: state.reader.bookmarks,
    notes: state.reader.notes,
    digests: state.reader.digests,
    mode: state.sidebar.mode,
    shelfIndex: state.sidebar.shelfIndex,
  };
};
const actionCreator = {
  handleFetchBooks,
  handleDeleteDialog,
  handleFetchBookmarks,
  handleFetchNotes,
  handleMessageBox,
  handleMessage,
  handleActionDialog,
  handleSelectedBooks,
};
export default connect(mapStateToProps, actionCreator)(DeleteDialog);

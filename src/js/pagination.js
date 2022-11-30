import { Pagination } from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';

const tuiEl = document.querySelector('.tui-pagination')

export const pagination = new tui.Pagination('pagination', {
        totalItems: 500,
        itemsPerPage: 10,
        visiblePages: 5
    });


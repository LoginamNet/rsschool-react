import * as jsxRuntime from "react/jsx-runtime";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useState, useEffect, StrictMode } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import { useForm } from "react-hook-form";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const searchSlice = createSlice({
  name: "search",
  initialState: { value: { search: "photo" } },
  reducers: {
    setSearch: (state, action) => {
      state.value.search = action.payload;
    }
  }
});
const { setSearch } = searchSlice.actions;
const headerTitleSlice = createSlice({
  name: "headerTitle",
  initialState: { value: { headerTitle: "" } },
  reducers: {
    setHeaderTitle: (state, action) => {
      state.value.headerTitle = action.payload;
    }
  }
});
const { setHeaderTitle } = headerTitleSlice.actions;
const formSlice = createSlice({
  name: "cards",
  initialState: { value: { cards: [], isModalOpen: false } },
  reducers: {
    setCards: (state, action) => {
      state.value.cards.push({
        name: action.payload.name,
        date: action.payload.date,
        checked: action.payload.check,
        selected: action.payload.select,
        radio: action.payload.radio,
        text: action.payload.text,
        file: URL.createObjectURL(action.payload.file[0])
      });
    },
    setModalOpen: (state) => {
      state.value.isModalOpen = true;
    },
    setModalClose: (state) => {
      state.value.isModalOpen = false;
    }
  }
});
const { setCards, setModalOpen: setModalOpen$1, setModalClose: setModalClose$1 } = formSlice.actions;
const ACCESS_KEY = "xn83Gq2KuuPLsmnks6mi_eAPWcBDyc2VcQ7a5oJdy8g";
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com" }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (search) => `/search/photos?page=1&per_page=15&query=${search}&client_id=${ACCESS_KEY}`
    }),
    getCard: builder.query({
      query: (id) => `/photos/${id}?client_id=${ACCESS_KEY}`
    })
  })
});
const { useGetCardsQuery, useGetCardQuery } = apiSlice;
const modalSlice = createSlice({
  name: "mainModal",
  initialState: { value: { id: "", isModalOpen: false } },
  reducers: {
    setID: (state, action) => {
      state.value.id = action.payload;
    },
    setModalOpen: (state) => {
      state.value.isModalOpen = true;
    },
    setModalClose: (state) => {
      state.value.isModalOpen = false;
      state.value.id = "";
    }
  }
});
const { setID, setModalOpen, setModalClose } = modalSlice.actions;
const store = configureStore({
  reducer: {
    headerTitle: headerTitleSlice.reducer,
    search: searchSlice.reducer,
    form: formSlice.reducer,
    mainModal: modalSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(apiSlice.middleware)
});
const index = "";
const colors = "";
const Layout$1 = "";
function Header() {
  const headerTitle = useSelector((state) => state.headerTitle.value.headerTitle);
  return /* @__PURE__ */ jsx("header", { role: "header", children: /* @__PURE__ */ jsxs("div", { className: "headerContainer", children: [
    /* @__PURE__ */ jsx("span", { className: "headerTitle", role: "headerTitle", children: headerTitle }),
    /* @__PURE__ */ jsxs("nav", { className: "headerMenu", children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/about", children: "About us" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/form", children: "Form" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { role: "footer", children: "2023" });
}
function Layout() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "mainContainer", children: /* @__PURE__ */ jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Search$1 = "";
function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value.search);
  return /* @__PURE__ */ jsxs("div", { className: "searchContainer", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "searchInput",
        type: "text",
        placeholder: "Print something!",
        defaultValue: search !== "photo" ? search : "",
        onInput: (event) => {
          setInput(event.target.value);
        },
        onKeyDown: (event) => {
          if (event.key === "Enter") {
            dispatch(setSearch(input));
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "searchButton",
        onClick: () => dispatch(setSearch(input)),
        role: "searchbutton",
        children: "FIND!"
      }
    )
  ] });
}
const Cards$1 = "";
function Card(props) {
  const dispatch = useDispatch();
  return /* @__PURE__ */ jsxs("div", { className: "cardContainer", role: "card", children: [
    /* @__PURE__ */ jsx("div", { className: "cardImage", style: { backgroundImage: `url(${props.card.urls.thumb})` } }),
    /* @__PURE__ */ jsxs("span", { className: "cardRating", children: [
      "💜",
      props.card.likes
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "cardMessageContainer",
        onClick: () => {
          dispatch(setModalOpen());
          dispatch(setID(props.card.id));
        },
        role: "mainopenmodal",
        children: /* @__PURE__ */ jsx("span", { className: "cardMessage", children: "Click for info" })
      }
    )
  ] });
}
function Cards(props) {
  const cards = props.cards.map((card, key) => /* @__PURE__ */ jsx(Card, { card }, key));
  return /* @__PURE__ */ jsx("div", { className: "cardsContainer", children: cards });
}
const MainModal$1 = "";
const Loading$1 = "";
function Loading() {
  return /* @__PURE__ */ jsxs("div", { className: "loadingContainer", role: "loading", children: [
    /* @__PURE__ */ jsx("div", { className: "loadingSpinner" }),
    /* @__PURE__ */ jsx("span", { className: "loadingText", children: "Loading.." })
  ] });
}
function MainModal() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.mainModal.value.id);
  const isModalOpen = useSelector((state) => state.mainModal.value.isModalOpen);
  const { data, isFetching } = useGetCardQuery(id);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `mainModalContainer ${isModalOpen && "mainModalContainerOpen"}`,
      onClick: (event) => {
        if (event.target !== event.currentTarget)
          return;
        dispatch(setModalClose());
      },
      role: "mainmodalback",
      children: /* @__PURE__ */ jsx("div", { className: `mainModal ${isModalOpen && "mainModalOpen"}`, children: isFetching ? /* @__PURE__ */ jsx(Loading, {}) : data.id && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mainModalData", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "mainModalImage",
              style: {
                backgroundImage: `url(${data && data.urls.regular})`,
                boxShadow: `5px 5px 0 0 ${data && data.color}`
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mainModalInfo", children: [
            /* @__PURE__ */ jsx("h2", { className: "mainModalHeader", children: data && data.user.name.toUpperCase() }),
            /* @__PURE__ */ jsx("span", { className: "mainModalLocation", children: data && (data.user.location || "Unknown location") }),
            /* @__PURE__ */ jsxs("span", { className: "mainModalSize", children: [
              "Size (W/H): ",
              data && `${data.width}px / ${data.height}px`
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "mainModalDate", children: [
              "Date: ",
              data && data.created_at.slice(0, 10).split("-").reverse().join("-")
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "mainModalLikes", children: [
              "Likes: ",
              data && data.likes
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "mainModalDescription", children: [
              "About:",
              " ",
              data && (data.description || `Author doesn't provide any description for that photo. Be free to use your imagination!`)
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "mainModalLink",
                href: data && data.urls.raw,
                target: "_blank",
                rel: "noreferrer",
                children: "Open full size in new window"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "mainModalButton",
            onClick: () => dispatch(setModalClose()),
            role: "mainmodalclose",
            children: "X"
          }
        )
      ] }) })
    }
  );
}
const messages = {
  EMPTY_SEARCH_ERROR: `Empty search or no results on your request! Please, add some text or try other keywords
    in search area and press Find button or Enter to display pictures. For example, «cat» or
    «plane»`,
  FETCHING_CARDS_ERROR: `Something went wrong on API responding your request! Please, try again later!`
};
function Main() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value.search);
  const { data, error, isFetching } = useGetCardsQuery(search);
  useEffect(() => {
    dispatch(setHeaderTitle("HOME"));
  });
  return /* @__PURE__ */ jsxs("div", { className: "page mainPage", children: [
    /* @__PURE__ */ jsx(Search, {}),
    isFetching ? /* @__PURE__ */ jsx(Loading, {}) : data.results.length ? /* @__PURE__ */ jsx(Cards, { cards: data.results }) : /* @__PURE__ */ jsxs("span", { className: "noCardsContainer", children: [
      /* @__PURE__ */ jsx("h2", { className: "noCardsHeader", children: "Hmm, something`s wrong.." }),
      /* @__PURE__ */ jsx("span", { className: "noCardsText", children: error ? messages.FETCHING_CARDS_ERROR : messages.EMPTY_SEARCH_ERROR })
    ] }),
    /* @__PURE__ */ jsx(MainModal, {})
  ] });
}
function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderTitle("ABOUT US"));
  });
  return /* @__PURE__ */ jsxs("div", { className: "page aboutPage", children: [
    /* @__PURE__ */ jsx("h2", { children: "Some info about us!" }),
    /* @__PURE__ */ jsx("span", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." })
  ] });
}
const Form$1 = "";
function NameInput(props) {
  return /* @__PURE__ */ jsxs("label", { className: "nameLabel", children: [
    /* @__PURE__ */ jsx("span", { className: "formHeader", children: "Enter your name:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "nameInput",
        type: "text",
        placeholder: "Print your awesome name there!",
        ...props.register("name", {
          required: "*Please, enter your name above!",
          validate: (value) => {
            return value[0] === value[0].toUpperCase() || "*Сapital letter first - Alex";
          }
        }),
        role: "nameinput"
      }
    ),
    props.errors.name && /* @__PURE__ */ jsx("span", { className: "formInvalidText", children: props.errors.name.message })
  ] });
}
function DateInput(props) {
  return /* @__PURE__ */ jsxs("label", { className: "dateLabel", children: [
    /* @__PURE__ */ jsx("span", { className: "formHeader", children: "Сhoose your date of birth:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "dateInput",
        type: "date",
        ...props.register("date", { required: "*Everybody has a birthday!" }),
        role: "dateinput"
      }
    ),
    props.errors.date && /* @__PURE__ */ jsx("span", { className: "formInvalidText", children: props.errors.date.message })
  ] });
}
function CheckInput(props) {
  return /* @__PURE__ */ jsxs("label", { className: "checkLabel", children: [
    "Water protection:",
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "checkInput",
        type: "checkbox",
        ...props.register("check"),
        role: "checkinput"
      }
    )
  ] });
}
function SelectInput(props) {
  return /* @__PURE__ */ jsxs("label", { className: "selectLabel", children: [
    "Material:",
    /* @__PURE__ */ jsxs("select", { className: "selectInput", ...props.register("select"), children: [
      /* @__PURE__ */ jsx("option", { value: "Steel", children: "Steel" }),
      /* @__PURE__ */ jsx("option", { value: "Plastic", children: "Plastic" }),
      /* @__PURE__ */ jsx("option", { value: "Gold", children: "Gold" }),
      /* @__PURE__ */ jsx("option", { value: "Carbon", children: "Carbon" })
    ] })
  ] });
}
function RadioInput(props) {
  return /* @__PURE__ */ jsxs("div", { className: "radioContainer", children: [
    /* @__PURE__ */ jsx("span", { className: "formHeader", children: "Choose your main hand:" }),
    /* @__PURE__ */ jsxs("label", { className: "radioLabel", children: [
      "Left hand:",
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          value: "left",
          ...props.register("radio"),
          role: "radioinput1",
          defaultChecked: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "radioLabel", children: [
      "Right hand:",
      /* @__PURE__ */ jsx("input", { type: "radio", value: "right", ...props.register("radio"), role: "radioinput2" })
    ] })
  ] });
}
function TextareaInput(props) {
  return /* @__PURE__ */ jsxs("div", { className: "textareaContainer", children: [
    /* @__PURE__ */ jsx("span", { className: "formHeader", children: "About yourself" }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        className: "textarea",
        placeholder: "Describe yourself! The more strange details, the more interesting the watch!",
        ...props.register("text", { required: "*You are interresting! Tell us your story!" }),
        role: "textareainput"
      }
    ),
    props.errors.text && /* @__PURE__ */ jsx("span", { className: "formInvalidText", children: props.errors.text.message })
  ] });
}
function FileInput(props) {
  return /* @__PURE__ */ jsx("label", { className: "fileLabel", children: /* @__PURE__ */ jsxs("div", { className: "fileContainer", children: [
    /* @__PURE__ */ jsx("span", { className: "formHeader", children: "Photo:" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "fileInput",
        type: "file",
        accept: "image/*",
        ...props.register("file", { required: "*Just a photo, nothing to afraid there!" }),
        role: "fileinput"
      }
    ),
    props.errors.file && /* @__PURE__ */ jsx("span", { className: "formInvalidText", children: props.errors.file.message })
  ] }) });
}
function CardForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit"
  });
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "formProps",
      onSubmit: handleSubmit((data) => {
        dispatch(setCards(data));
        dispatch(setModalOpen$1());
        reset();
      }),
      role: "form",
      children: [
        /* @__PURE__ */ jsx("span", { className: "formTitle", children: "Let`s pick up the watch!" }),
        /* @__PURE__ */ jsxs("div", { className: "formContainer nameDateContainer", children: [
          /* @__PURE__ */ jsx(NameInput, { register, errors }),
          /* @__PURE__ */ jsx(DateInput, { register, errors })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "formContainer checkSelectRadioContainer", children: [
          /* @__PURE__ */ jsxs("div", { className: "checkSelectContainer", children: [
            /* @__PURE__ */ jsx("span", { className: "formHeader", children: "Features:" }),
            /* @__PURE__ */ jsx(CheckInput, { register }),
            /* @__PURE__ */ jsx(SelectInput, { register })
          ] }),
          /* @__PURE__ */ jsx(RadioInput, { register })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "formContainer radioTextAreaContainer", children: [
          /* @__PURE__ */ jsx(FileInput, { register, errors }),
          /* @__PURE__ */ jsx(TextareaInput, { register, errors })
        ] }),
        /* @__PURE__ */ jsx("input", { className: "formSubmit", type: "submit", value: "IT`S ABOUT TIME!", role: "formsubmit" })
      ]
    }
  );
}
const FormCards$1 = "";
function SingleFormCard(props) {
  return /* @__PURE__ */ jsxs("div", { className: "formCardContainer", role: "formcard", children: [
    /* @__PURE__ */ jsx("div", { className: "formCardImage", style: { backgroundImage: `url(${props.file})` } }),
    /* @__PURE__ */ jsxs("span", { className: "formCardDateHand", children: [
      props.date,
      " / ",
      props.radio.toUpperCase() + " HAND"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "formCardDefinition", children: [
      /* @__PURE__ */ jsx("li", { className: "formCardWater", children: props.checked ? "Waterproof" : "Not waterproof" }),
      /* @__PURE__ */ jsx("li", { className: "formCardMaterial", children: props.selected }),
      /* @__PURE__ */ jsx("span", { className: "formCardDescription", children: props.text })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "formCardName", children: props.name })
  ] });
}
function FormCards() {
  const cards = useSelector((state) => state.form.value.cards);
  const formCards = cards.map((item, key) => /* @__PURE__ */ jsx(
    SingleFormCard,
    {
      name: item.name,
      date: item.date,
      checked: item.checked,
      radio: item.radio,
      text: item.text,
      selected: item.selected,
      file: item.file
    },
    key
  ));
  return /* @__PURE__ */ jsx("div", { className: "formCardsContainer", children: formCards });
}
const FormModal$1 = "";
function FormModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.form.value.isModalOpen);
  return /* @__PURE__ */ jsx("div", { className: `formModalContainer ${isModalOpen && "formModalContainerOpen"}`, children: /* @__PURE__ */ jsxs("div", { className: `formModal ${isModalOpen && "formModalOpen"}`, children: [
    /* @__PURE__ */ jsx("h2", { className: "formModalHeader", children: "Submited!" }),
    /* @__PURE__ */ jsx("span", { className: "formModalText", children: "Thanks for your data! It will help us to do some things!" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "formModalButton",
        onClick: () => dispatch(setModalClose$1()),
        role: "formmodalclose",
        children: "Close & add more"
      }
    )
  ] }) });
}
function Form() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.form.value.cards);
  useEffect(() => {
    dispatch(setHeaderTitle("FORM"));
  });
  return /* @__PURE__ */ jsxs("div", { className: "page formPage", children: [
    /* @__PURE__ */ jsxs("div", { className: "form", children: [
      /* @__PURE__ */ jsx("div", { className: "formImage" }),
      /* @__PURE__ */ jsx(CardForm, {}),
      /* @__PURE__ */ jsx(FormModal, {})
    ] }),
    /* @__PURE__ */ jsx("div", { children: cards.length > 0 ? /* @__PURE__ */ jsx(FormCards, {}) : /* @__PURE__ */ jsx("h3", { style: { textAlign: "center" }, children: "NO CARDS FOR NOW!" }) })
  ] });
}
function NotFoundPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderTitle("404"));
  });
  return /* @__PURE__ */ jsxs("div", { className: "page notFoundPage", children: [
    /* @__PURE__ */ jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ jsx("span", { children: "There`s no such page!" })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(Layout, {}), children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Main, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "about", element: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "form", element: /* @__PURE__ */ jsx(Form, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
  ] }) });
}
function render(url, opts) {
  const stream = renderToPipeableStream(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) }) }),
    opts
  );
  return stream;
}
export {
  render
};

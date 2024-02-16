import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import QuestionScreen from "./components/QuestionScreen";
import QuestionsService from "./service";
import EmailScreen from "./components/EmailScreen";
import SuccessScreen from "./components/SuccessScreen";
import ErrorScreen from "./components/ErrorScreen";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen/>,
        children: [
            {
                path: 'quiz/:questionId',
                element: <QuestionScreen />,
                loader: async ({ params }) => {
                    const q = await new QuestionsService().getQuestion(+params.questionId);
                    if(!q) {
                        return redirect("/")
                    }
                    return {
                        question: q,
                        number: params.questionId
                    };
                  },
            },
            {
                path: '/email',
                element: <EmailScreen />,
            },
            {
                path: "/success",
                element: <SuccessScreen />,
            },
        ]
    },
]);

export default router;
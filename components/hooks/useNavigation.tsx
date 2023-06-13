import { useRouter } from "next/router";
import { useContext } from "react";
import { NavigationContext } from "../ui/navigation/NavigationContext";

export const useNavigation = () => {
    /**
     * `useRouter` to access the `router` object
     * https://nextjs.org/docs/pages/api-reference/functions/use-router
     * */
    const router = useRouter();
    // const {navigating, setNavgating, onNavigate} = useContext(NavigationContext);
};

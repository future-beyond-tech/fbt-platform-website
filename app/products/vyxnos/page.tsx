import { redirect } from "next/navigation";

/**
 * VYXNOS product link points to the research site (vyxnos.com).
 * This route redirects to the Research hub where VYXNOS is listed.
 */
export default function VyxnosProductPage() {
  redirect("/research");
}

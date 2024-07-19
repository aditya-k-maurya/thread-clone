import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";
import PostThread from "@/components/forms/PostThread";
import { redirect } from "next/navigation";

async function page() {
	const user = await currentUser();

	if (!user) return null;

  const userInfo = await fetchUser(user.id);
  
  if (!userInfo?.onboarded) redirect('/onboarding');

	return (
		<>
			<h1 className="head-thread">Create Theread</h1>

      <PostThread userId={userInfo._id} />
		</>
	);
}

export default page;

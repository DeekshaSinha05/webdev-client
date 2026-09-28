import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="/account/signin" id="wd-account-signin-link">
        Signin
      </Link>
      <br />
      <Link href="/account/signup" id="wd-account-signup-link">
        Signup
      </Link>
      <br />
      <Link href="/account/profile" id="wd-account-profile-link">
        Profile
      </Link>
    </div>
  );
}
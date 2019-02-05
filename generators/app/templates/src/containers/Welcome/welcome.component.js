import React from "react";
import { Image, LogoutButton } from "@inrupt/solid-react-components";
import isLoading from "@hocs/isLoading";
import {
  WelcomeWrapper,
  WelcomeCard,
  WelcomeLogo,
  WelcomeProfile,
  WelcomeDetail
} from "./welcome.style";

/**
 * Welcome Page UI component, containing the styled components for the Welcome Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
const WelcomePageContent = props => {
  return (
    <WelcomeWrapper>
      <WelcomeCard className="card">
        <WelcomeLogo>
          <img src="/img/logo.svg" alt="Inrupt" />
        </WelcomeLogo>
        <WelcomeProfile>
          <h3>
            Welcome, <span>{props.name}</span>
          </h3>
          <div>
            {props.image && (
              <Image
                alt="User"
                src={props.image}
                defaultSrc="/img/icon/empty-profile.svg"
              />
            )}
          </div>
          <p>
            All Done ? <LogoutButton />
          </p>
        </WelcomeProfile>
      </WelcomeCard>
      <WelcomeCard className="card">
        <WelcomeDetail>
          <h3>
            This application was generated by the
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              React SDK for Solid.
            </a>
          </h3>
          <p>
            The{" "}
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              React SDK for Solid
            </a>{" "}
            is a combination of libraries, components, documentation, best
            practices, and an application generator meant to accelerate the
            development of high-quality Solid applications.
          </p>
          <ul>
            <li>
              Reusable Components that you can use on your own in the
              applications that you build.
            </li>
            <li>
              Application Generator that incorporates all of the components and
              best practices together for you, standing up THIS fully functional
              Solid React application.
            </li>
            <li>
              Best practice patterns that you can reference as examples of how
              to accomplish particular things.
            </li>
          </ul>
          <p>
            The SDK is continually evolving. Take a look at the
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/tree/master#release-timeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Release Timeline{" "}
            </a>
            for what’s currently currently planned. This release includes:
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#user-registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                User Registration{" "}
              </a>
              for a Solid Pod.
            </li>
            <li>
              <a
                href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#user-authentication"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                User Authentication{" "}
              </a>
              against user selected Providers.
            </li>
            <li>
              Use of an{" "}
              <a
                href="http://design.inrupt.com/atomic-core/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Atomic Style Guide{" "}
              </a>{" "}
              that you can use to{" "}
              <a
                href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#design-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                style{" "}
              </a>{" "}
              your applications.
            </li>
            <li>
              Infrastructure and applied best practices for{" "}
              <a
                href="https://github.com/Inrupt-inc/solid-react-sdk#error-handling"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Error Handling
              </a>{" "}
              ,
              <a
                href="https://github.com/Inrupt-inc/solid-react-sdk#test-infrastructure"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Testing
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/Inrupt-inc/solid-react-sdk#accessibility"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Accessibility
              </a>{" "}
              .
            </li>
          </ul>
          <p>
            Currently in the plan for release over the next components to handle
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#user-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              User Profile
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#user-preferences"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Preferences
            </a>{" "}
            ,{" "}
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#internationalization-i18n"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              i18n
            </a>{" "}
            ,{" "}
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#notifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Notifications
            </a>{" "}
            ,{" "}
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#access-control"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Access Control
            </a>{" "}
            ,{" "}
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#linking-things"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Linking Things
            </a>{" "}
            , and{" "}
            <a
              href="https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md#data-discovery"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Data Discovery
            </a>{" "}
            .
          </p>
        </WelcomeDetail>
      </WelcomeCard>
    </WelcomeWrapper>
  );
};

export default isLoading(WelcomePageContent);

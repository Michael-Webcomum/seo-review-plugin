/** @jsx jsx */

import React from 'react';
// import * as ReactDOM from 'react-dom';
import appState, { globalState } from '@builder.io/app-context';
import { Builder } from '@builder.io/react';
import { Button } from '@material-ui/core';
import { formatSeoData } from './formatSeoData';
import { css } from '@emotion/react';
import { jsx } from '@emotion/core';

const breakpoints = [600];

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

const modalWrapper = {
  wrapper: css({
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }),
};

const modalStyles = {
  modalStyles: css({
    position: 'fixed',
    zIndex: 1,
    top: '50%',
    left: '50%',
    overflowY: 'scroll',
    WebkitTransform: 'translate(-50%, -54%)',
    msTransform: 'translate(-50%, -54%)',
    transform: 'translate(-50%, -54%)',
    height: '85vh',
    width: '50vw',
    border: '1px solid #4e4d4db0',
    background: '#ffffff',
    WebkitBoxShadow: '20px 15px 20px 0px rgb(255 255 255 / 20%)',
    boxShadow: '20px 15px 20px 0px rgb(255 255 255 / 20%)',
    opacity: '0.9',
    padding: '20px 30px 30px 30px',
    marginBottom: '50px',
    fontFamily: 'Ubuntu',
    lineHeight: 1.8,
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#6f91bd',
      borderRadius: '20px',
    },
  }),
};

const container = {
  container: css({
    display: ['-webkit-box', '-ms-flexbox', 'flex'],
    flexWrap: 'wrap',
    WebkitBoxOrient: 'vertical',
    WebkitBoxDirection: 'normal',
    msFlexDirection: 'row',
    flexDirection: 'row',
    fontSize: '18px',
    width: '100%',
    borderBottom: '1px solid black',
    padding: '15px 10px 15px 10px',
    '&:after': {
      content: '',
      display: 'table',
      clear: 'both',
    },
    [mq[0]]: {
      width: '100%',
    },
  }),
};

const leftContainer = {
  leftContainer: css({
    float: 'left',
    width: '30%',
    padding: '0px 10px 10px 10px',
  }),
};

const rightContainer = {
  rightContainer: css({
    position: 'relative',
    height: '175px',
    left: '14px',
    width: '60%',
    maxWidth: '31.25rem',
    textAlign: 'justify',
  }),
};

const bottomContainer = {
  bottomContainer: css({
    position: 'relative',
    width: '886px',
    paddingBottom: '20px',
  }),
};

const borderBox = {
  borderBox: css({
    borderRight: '1px solid #999999',
  }),
};

const feedbackSummary = {
  feedbackSummary: css({
    float: 'right',
    position: 'relative',
    top: '-26%',
    left: '11%',
    borderLeft: '1px solid rgb(153, 153, 153)',
    padding: '10px 10px 10px 20px',
    height: '10rem',
  }),
};

const summaryWrapper = {
  summaryWrapper: css({
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
  }),
};

const modalTitle = {
  modalTitle: css({
    fontSize: '40px',
    fontWeight: '600',
    textAlign: 'center',
    margin: '0',
    padding: '0',
  }),
};

const h1 = {
  h1: css({
    textAlign: 'left',
    fontSize: '30px',
    fontWeight: '500',
    paddingTop: '20px !important',
    margin: '0',
  }),
};

const h2 = {
  h2: css({
    margin: '0',
    fontSize: '24px',
  }),
};

const h5 = {
  h5: css({
    width: '10rem',
    height: '0rem',
    textAlign: 'center',
  }),
};

const p = {
  p: css({
    position: 'relative',
    lineHeight: '21px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
};

const feedbackDetailTitle = {
  feedbackDetailTitle: css({
    fontSize: '18px',
    fontWeight: '500',
  }),
};

const feedbackDetails = {
  feedbackDetails: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '17px',
    height: '110px',
    width: '51.25rem',
    borderBottom: '1px solid rgb(153, 153, 153)',
  }),
};

const feedbackDetailExtra = {
  feedbackDetailExtra: css({
    fontSize: '16px',
    width: '70vh',
    display: 'inline',
    paddingLeft: '62px',
  }),
};

const pbwrapper = {
  pbwrapper: css({
    display: ['-webkit-box', '-ms-flexbox', 'flex'],
    WebkitBoxAlign: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'justify',
    msFlexPack: 'justify',
    justifyContent: 'space-between',
    maxWidth: '27vw',
    height: '2.063rem',
    textAlign: 'center',
  }),
};

const progressBar = {
  progressBar: css({
    maxWidth: '27vw',
    width: '100%',
    borderRadius: '20px',
  }),
};

const progressBarFill = {
  progressBarFill: css({
    display: 'block',
    height: '2.4vh',
    width: '100%',
    background: ['repeating-linear-gradient(right, #70e000, #38b000, #008000)'],
    backgroundImage: ['repeating-linear-gradient(to left, #70e000, #38b000, #008000)'],
    borderRadius: '20px',
    transition: 'width 0.5s ease-in',
    lineHeight: '1.3',
  }),
};

const SeoScore = {
  SeoScore: css({
    paddingRight: '15px',
  }),
};

const maxSeoScore = {
  maxSeoScore: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25vw',
    padding: '0px 0px 0px 20px',
  }),
};

const maxSeoScoreProgress = {
  maxSeoScoreProgress: css({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '25vw',
    textAlign: 'center',
  }),
};

const maxSeoScoreProgressBar = {
  maxSeoScoreProgressBar: css({
    maxWidth: '27vw',
    width: '250px',
    backgroundColor: '#e0e0e0',
    borderRadius: '20px',
  }),
};

const maxSeoScoreProgressBarFill = {
  maxSeoScoreProgressBarFill: css({
    display: 'block',
    height: '3.4vh',
    width: '100%',
    background: ['repeating-linear-gradient(right, #70e000, #38b000, #008000)'],
    backgroundImage: ['repeating-linear-gradient(to left, #70e000, #38b000, #008000)'],
    borderRadius: '20px',
    transition: 'width 0.5s ease-in',
  }),
};

const dotWrapper = {
  dotWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '25px',
    paddingBottom: '50px',
    width: '150px',
  }),
};

const dotMinus = {
  dotMinus: css({
    height: '25px',
    width: '28px',
    backgroundColor: '#ff3333',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'relative',
    padding: '0px 8px 28px 7.5px',
    marginLeft: '37px',
    top: '7px',
  }),
};

const dotPlus = {
  dotPlus: css({
    height: '25px',
    width: '28px',
    backgroundColor: '#4bb543',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'relative',
    padding: '0px 8px 28px 7.5px',
    marginLeft: '37px',
    top: '7px',
  }),
};

const summaryDotRed = {
  summaryDotRed: css({
    height: '25px',
    width: '28px',
    backgroundColor: '#ff3333',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'relative',
    padding: '0px 8px 30px 4px',
    marginLeft: '10px',
  }),
};

const summaryDotGreen = {
  summaryDotGreen: css({
    height: '25px',
    width: '28px',
    backgroundColor: '#4bb543',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'relative',
    padding: '0px 8px 28px 7.5px',
    marginLeft: '10px',
  }),
};

const summaryDotYellow = {
  summaryDotYellow: css({
    height: '25px',
    width: '28px',
    backgroundColor: '#ffcc00',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'relative',
    padding: '0px 8px 29px 7.5px',
    marginLeft: '10px',
  }),
};

const imagePadding = {
  imagePadding: css({
    paddingRight: '318px',
  }),
};

export const registerContentAction = (contentAction: {
  label: string;
  showIf(content: any, model: any): Boolean;
  onClick(content: any): Promise<void>;
}) => {
  Builder.register('content.action', contentAction);
};

export const fastClone = (obj: any) =>
  obj === undefined ? undefined : JSON.parse(JSON.stringify(obj));

export const seoReviewModelName = 'seo-review-history';
export const getSEOReviewModel = () =>
  appState.models.result.find((m: any) => m.name === seoReviewModelName);
export const getSEOReviewModelTemplate = () => ({
  '@version': 2,
  name: seoReviewModelName,
  kind: 'data' as const,
  subType: '',
  schema: {},
  publishText: 'Authorize',
  unPublishText: 'Cancel',
  fields: [
    {
      '@type': '@builder.io/core:Field',
      name: 'description',
      type: 'text',
      required: false,
      helperText: 'Example field',
    },
  ],
  helperText: 'Seo Reviews History',
  publicWritable: false,
  publicReadable: false,
  strictPrivateRead: true,
  strictPrivateWrite: false,
  showMetrics: false,
  showAbTests: false,
  showTargeting: false,
  showScheduling: false,
  hideFromUI: false,
});

//Displays popup confirming the review has been completed and provides path to review details.
export const showReviewNotifications = (jobId: string) => {
  appState.snackBar.show(
    <div style={{ display: 'flex', alignItems: 'center' }}>Done!</div>,
    100000,
    <Button
      color="primary"
      style={{
        pointerEvents: 'auto',
        ...(appState.document.small && {
          width: 'calc(100vw - 90px)',
          marginRight: 45,
          marginTop: 10,
          marginBottom: 10,
        }),
      }}
      variant="contained"
      onClick={async () => {
        appState.location.go(`/content/${jobId}`);
        appState.snackBar.open = false;
      }}
    >
      Go to review details
    </Button>
  );
};

//Modal/Popup function with visualised data
export const expandSeoReview = (dataToFormat: any) => {
  const data = formatSeoData(dataToFormat);

  appState.globalState.openDialog(
    <div css={modalWrapper}>
      <div css={modalStyles.modalStyles} id="element0">
        {/* <button className="button-default" onClick={closeModal}>
				Show Modal
			</button> */}
        <div css={modalTitle.modalTitle}>SEO Review Results</div>
        <h1 css={h1.h1}>Overview</h1>
        <div css={container.container}>
          <div css={leftContainer.leftContainer}>
            <div css={borderBox.borderBox}>
              <h2 css={h2.h2}>Category</h2>
              <div>Keyword</div>
              <div>Overall SEO Score</div>
              <div>Available SEO Points</div>
              <div>Earned SEO Points</div>
            </div>
          </div>

          <div css={rightContainer.rightContainer}>
            <h2 css={h2.h2}>Results</h2>
            <div css={feedbackSummary.feedbackSummary}>
              <div css={feedbackDetailTitle.feedbackDetailTitle}>Feedback Summary</div>

              <div>
                <div css={summaryWrapper.summaryWrapper}>
                  Optimized
                  <div css={summaryDotGreen.summaryDotGreen}>{data.overview.summary.optimized}</div>
                </div>
                <div css={summaryWrapper.summaryWrapper}>
                  Warnings
                  <div css={summaryDotYellow.summaryDotYellow}>
                    {data.overview.summary.warnings}
                  </div>
                </div>
                <div css={summaryWrapper.summaryWrapper}>
                  Errors
                  <div css={summaryDotRed.summaryDotRed}>{data.overview.summary.errors}</div>
                </div>
              </div>
            </div>

            <div>{data.overview.keyword}</div>
            <div css={pbwrapper.pbwrapper}>
              <div css={progressBar.progressBar}>
                <p css={progressBarFill.progressBarFill} id="myProgressBar">
                  {data.overview.overallSeoScore}/100
                </p>
              </div>
            </div>
            <div>{data.overview.availableSeoPoints}</div>
            <div css={pbwrapper.pbwrapper}>
              <div css={progressBar.progressBar}>
                <p css={progressBarFill.progressBarFill}>
                  {data.overview.earnedSeoPoints}/{data.overview.availableSeoPoints}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 css={h1.h1}>Title Tag</h1>
        <div css={container.container}>
          <div css={leftContainer.leftContainer}>
            <div css={borderBox.borderBox}>
              <h2 css={h2.h2}>Category</h2>
              <div>Result</div>
              <div>Title Found</div>
              <div>Title Tag</div>
              <div>Title Length</div>
              <div>Title Tag Number</div>
              <div>Focus Keywords Position</div>
              <div>Focus Keywords Found</div>
              <div>Keyword</div>
            </div>
          </div>

          <div css={rightContainer.rightContainer}>
            <h2 css={h2.h2}>Results</h2>
            <div>{data.titleTag.Result}</div>
            <div>{data.titleTag.titleFound}</div>
            <div>{data.titleTag.titleTag}</div>
            <div>{data.titleTag.titleLength}</div>
            <div>{data.titleTag.titleTagNumber}</div>
            <div>{data.titleTag.focusKeywordsPosition}</div>
            <div>{data.titleTag.focusKeywordsFound}</div>
            <div>{data.titleTag.keyword}</div>
          </div>

          <div css={bottomContainer.bottomContainer}>
            <h3>Feedback Details</h3>
            <div css={dotWrapper.dotWrapper}>
              <h5 css={h5.h5}>
                Positive &nbsp;&nbsp;&nbsp;=<div css={dotPlus.dotPlus}></div>
              </h5>
              <h5 css={h5.h5}>
                Negative &nbsp;=<div css={dotMinus.dotMinus}></div>
              </h5>
            </div>

            <div css={feedbackDetails.feedbackDetails}>
              <div>
                {data.titleTag.feedbackDetails.found.text ==
                data.titleTag.feedbackDetails.found.text ? (
                  <div>Title Tag Not Found</div>
                ) : (
                  <div>Title Tag Found - {data.titleTag.feedbackDetails.found.text}</div>
                )}
              </div>
              <div css={feedbackDetailExtra.feedbackDetailExtra}>
                <p css={p.p}>
                  {' '}
                  {data.titleTag.feedbackDetails.found.class}
                  {data.titleTag.feedbackDetails.found.class == 'positive' ? (
                    <div css={summaryDotGreen.summaryDotGreen}></div>
                  ) : (
                    <div css={summaryDotRed.summaryDotRed}></div>
                  )}
                </p>
                <p css={p.p}>{data.titleTag.feedbackDetails.found.text}</p>
              </div>
            </div>
            <div css={feedbackDetails.feedbackDetails}>
              <div>Length</div>
              <div css={feedbackDetailExtra.feedbackDetailExtra}>
                <p css={p.p}>
                  {' '}
                  {data.titleTag.feedbackDetails.length.class}
                  {data.titleTag.feedbackDetails.length.class == 'positive' ? (
                    <div css={summaryDotGreen.summaryDotGreen}></div>
                  ) : (
                    <div css={summaryDotRed.summaryDotRed}></div>
                  )}
                </p>
                <p css={p.p}>{data.titleTag.feedbackDetails.length.text}</p>
              </div>
            </div>
            <div css={feedbackDetails.feedbackDetails}>
              <div>Focus Keyword</div>
              <div css={feedbackDetailExtra.feedbackDetailExtra}>
                <p css={p.p}>
                  {' '}
                  {data.titleTag.feedbackDetails.focusKeyword.class}
                  {data.titleTag.feedbackDetails.focusKeyword.class == 'positive' ? (
                    <div css={summaryDotGreen.summaryDotGreen}></div>
                  ) : (
                    <div css={summaryDotRed.summaryDotRed}></div>
                  )}
                </p>
                <p css={p.p}>{data.titleTag.feedbackDetails.focusKeyword.text}</p>
              </div>
            </div>
            <div css={feedbackDetails.feedbackDetails}>
              <div>Focus Keyword Position</div>
              <div css={feedbackDetailExtra.feedbackDetailExtra}>
                <p css={p.p}>
                  {' '}
                  {data.titleTag.feedbackDetails.focusKeywordsPosition.class}
                  {data.titleTag.feedbackDetails.focusKeywordsPosition.class == 'positive' ? (
                    <div css={summaryDotGreen.summaryDotGreen}></div>
                  ) : (
                    <div css={summaryDotRed.summaryDotRed}></div>
                  )}
                </p>
                <p css={p.p}>{data.titleTag.feedbackDetails.focusKeywordsPosition.text}</p>
              </div>
            </div>
          </div>
          <div css={maxSeoScore.maxSeoScore}>
            Max SEO Score Available = {data.titleTag.maxSeoScoreAvailable.toFixed(2)};
          </div>
          <div css={maxSeoScoreProgress.maxSeoScoreProgress}>
            <div css={SeoScore}>SEO Score&nbsp;&nbsp;</div>
            <div css={maxSeoScoreProgressBar.maxSeoScoreProgressBar}>
              <div css={maxSeoScoreProgressBarFill.maxSeoScoreProgressBarFill}>
                {data.titleTag.seoScore.toFixed(2)}/{data.titleTag.maxSeoScoreAvailable.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 css={h1.h1}>Meta Description</h1>
          <div css={container.container}>
            <div css={leftContainer.leftContainer}>
              <div css={borderBox.borderBox}>
                <h2 css={h2.h2}>Category</h2>
                <div>Result</div>
                <div>Meta Description Found?</div>
                <div>Meta Description</div>
                <div>Meta Description Length</div>
                <div>Meta Description Number</div>
                <div>Focus Keywords Position</div>
                <div>Focus Keywords Found</div>
                <div>Keyword</div>
              </div>
            </div>

            <div css={rightContainer.rightContainer}>
              <h2 css={h2.h2}>Results</h2>
              <div>{data.metaDescription.result}</div>
              <div>{data.metaDescription.metaDescriptionFound}</div>
              <div>{data.metaDescription.metaDescription}</div>
              <div>{data.metaDescription.metaDescriptionLength}</div>
              <div>{data.metaDescription.metaDescriptionNumber}</div>
              <div>{data.metaDescription.focusKeywordsPosition}</div>
              <div>{data.metaDescription.focusKeywordsFound}</div>
              <div>{data.metaDescription.keyword}</div>
            </div>

            <div css={bottomContainer.bottomContainer}>
              <h3>Feedback Details</h3>
              <div css={dotWrapper.dotWrapper}>
                <h5 css={h5.h5}>
                  Positive &nbsp;&nbsp;&nbsp;=<div css={dotPlus.dotPlus}></div>
                </h5>
                <h5 css={h5.h5}>
                  Negative &nbsp;=<div css={dotMinus.dotMinus}></div>
                </h5>
              </div>

              <div css={feedbackDetails.feedbackDetails}>
                <div>
                  {data.metaDescription.feedbackDetails.found.text ==
                  data.metaDescription.feedbackDetails.found.text ? (
                    <div>Not Found</div>
                  ) : (
                    <div>Meta Description Found -{data.titleTag.feedbackDetails.found.text}</div>
                  )}
                </div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {data.metaDescription.feedbackDetails.found.class}
                    {data.metaDescription.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.metaDescription.feedbackDetails.found.text}</p>
                </div>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Length</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {data.metaDescription.feedbackDetails.length.class}
                    {data.metaDescription.feedbackDetails.length.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.metaDescription.feedbackDetails.length.text}</p>
                </div>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Focus Keyword</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {data.metaDescription.feedbackDetails.focusKeyword.class}
                    {data.metaDescription.feedbackDetails.focusKeyword.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.metaDescription.feedbackDetails.focusKeyword.text}</p>
                </div>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Focus Keywords Position</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {data.metaDescription.feedbackDetails.focusKeywordsPosition.class}
                    {data.metaDescription.feedbackDetails.focusKeywordsPosition.class ==
                    'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.metaDescription.feedbackDetails.focusKeywordsPosition.text}</p>
                </div>
              </div>
            </div>

            <div css={maxSeoScore.maxSeoScore}>
              Max SEO Score Available = {data.metaDescription.maxSeoScoreAvailable.toFixed(2)}
            </div>
            <div css={maxSeoScoreProgress.maxSeoScoreProgress}>
              <div css={SeoScore}>SEO Score&nbsp;&nbsp;</div>
              <div css={maxSeoScoreProgressBar.maxSeoScoreProgressBar}>
                <div css={maxSeoScoreProgressBarFill.maxSeoScoreProgressBarFill}>
                  {data.metaDescription.seoScore.toFixed(2)}/
                  {data.metaDescription.maxSeoScoreAvailable.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 css={h1.h1}>Page Headings Summary</h1>
          <div css={container.container}>
            <div css={leftContainer.leftContainer}>
              <div css={borderBox.borderBox}>
                <h2 css={h2.h2}>Category</h2>
                <div>H1</div>
                <div>H2</div>
                <div>H3</div>
                <div>H4</div>
                <div>H5</div>
                <div>H6</div>
                <div>H1 Count</div>
                <div>H1 Content</div>
                <div>Focus Keywords Found</div>
                <div>Keyword</div>
              </div>
            </div>
            <div css={rightContainer.rightContainer}>
              <h2 css={h2.h2}>Results</h2>
              <div>{data.pageHeadingsSummary.h1}</div>
              <div>{data.pageHeadingsSummary.h2}</div>
              <div>{data.pageHeadingsSummary.h3}</div>
              <div>{data.pageHeadingsSummary.h4}</div>
              <div>{data.pageHeadingsSummary.h5}</div>
              <div>{data.pageHeadingsSummary.h6}</div>
              <div>{data.pageHeadingsSummary.h1Count}</div>
              <div>{data.pageHeadingsSummary.h1Content}</div>
              <div>{data.pageHeadingsSummary.focusKeywordsFound}</div>
              <div>{data.pageHeadingsSummary.focusKeywordsFound}</div>
              <div>{data.pageHeadingsSummary.keyword}</div>
            </div>

            <div css={bottomContainer.bottomContainer}>
              <h3>Feedback Details</h3>
              <div css={dotWrapper.dotWrapper}>
                <h5 css={h5.h5}>
                  Positive &nbsp;&nbsp;&nbsp;=<div css={dotPlus.dotPlus}></div>
                </h5>
                <h5 css={h5.h5}>
                  Negative &nbsp;=<div css={dotMinus.dotMinus}></div>
                </h5>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                {/* <div>Page Headings Summary</div> */}
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {/* {data.pageHeadingsSummary.feedbackDetails.found.text} */}
                    {/* {data.pageHeadingsSummary.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )} */}
                  </p>
                </div>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Focus Keyword</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>{data.pageHeadingsSummary.feedbackDetails.focusKeyword.text}</p>
                  <p css={p.p}>
                    {data.pageHeadingsSummary.feedbackDetails.focusKeyword.class}
                    {data.pageHeadingsSummary.feedbackDetails.focusKeyword.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div css={maxSeoScore.maxSeoScore}>
              Max SEO Score Available
              {data.pageHeadingsSummary.maxSeoScoreAvailable.toFixed(2)}
            </div>
            <div css={maxSeoScoreProgress.maxSeoScoreProgress}>
              <div css={SeoScore}>SEO Score&nbsp;&nbsp;</div>
              <div css={maxSeoScoreProgressBar.maxSeoScoreProgressBar}>
                <div css={maxSeoScoreProgressBarFill.maxSeoScoreProgressBarFill}>
                  {data.pageHeadingsSummary.seoScore.toFixed(2)}/
                  {data.pageHeadingsSummary.maxSeoScoreAvailable.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 css={h1.h1}>Word Count</h1>
          <div css={container.container}>
            <div css={leftContainer.leftContainer}>
              <div css={borderBox.borderBox}>
                <h2 css={h2.h2}>Category</h2>
                <div>Word Count Total</div>
                <div>Corrected Word Count</div>
                <div>Anchor Text Words</div>
                <div>Anchor Percentage</div>
              </div>
            </div>

            <div css={rightContainer.rightContainer}>
              <h2 css={h2.h2}>Results</h2>
              <div>{data.wordCount.wordCountTotal}</div>
              <div>{data.wordCount.correctedWordCount}</div>
              <div>{data.wordCount.anchorTextWords}</div>
              <div>{data.wordCount.anchorPercentage}</div>
            </div>

            <div css={bottomContainer.bottomContainer}>
              <h3>Feedback Details</h3>
              <div css={dotWrapper.dotWrapper}>
                <h5 css={h5.h5}>
                  Positive &nbsp;&nbsp;&nbsp;=<div css={dotPlus.dotPlus}></div>
                </h5>
                <h5 css={h5.h5}>
                  Negative &nbsp;=<div css={dotMinus.dotMinus}></div>
                </h5>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Word Count</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {data.wordCount.feedbackDetails.found.class}
                    {data.wordCount.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.wordCount.feedbackDetails.found.text}</p>
                </div>
              </div>
            </div>

            <div css={maxSeoScore.maxSeoScore}>
              Max SEO Score Available
              {data.wordCount.maxSeoScoreAvailable.toFixed(2)}
            </div>
            <div css={maxSeoScoreProgress.maxSeoScoreProgress}>
              <div css={SeoScore}>SEO Score&nbsp;&nbsp;</div>
              <div css={maxSeoScoreProgressBar.maxSeoScoreProgressBar}>
                <div css={maxSeoScoreProgressBarFill.maxSeoScoreProgressBarFill}>
                  {data.wordCount.seoScore.toFixed(2)}/
                  {data.wordCount.maxSeoScoreAvailable.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 css={h1.h1}>On Page Links Summary</h1>
          <div css={container.container}>
            <div css={leftContainer.leftContainer}>
              <div css={borderBox.borderBox}>
                <h2 css={h2.h2}>Category</h2>
                <div>Total Links</div>
                <div>External Links</div>
                <div>Internal Links</div>
                <div>No Follow Count</div>
                <div>Duplicate Links</div>
                <div>No Alt Tag</div>
              </div>
            </div>

            <div css={rightContainer.rightContainer}>
              <h2 css={h2.h2}>Results</h2>
              <div>{data.onPageLinksSummary.totalLinks}</div>
              <div>{data.onPageLinksSummary.externalLinks}</div>
              <div>{data.onPageLinksSummary.internalLinks}</div>
              <div>{data.onPageLinksSummary.noFollowCount}</div>
              <div>{data.onPageLinksSummary.duplicateLinks}</div>
              <div>{data.onPageLinksSummary.noAltTag}</div>
            </div>

            <div css={bottomContainer.bottomContainer}>
              <h3>Feedback Details</h3>
              <div css={dotWrapper.dotWrapper}>
                <h5 css={h5.h5}>
                  Positive &nbsp;&nbsp;&nbsp;=<div css={dotPlus.dotPlus}></div>
                </h5>
                <h5 css={h5.h5}>
                  Negative &nbsp;=<div css={dotMinus.dotMinus}></div>
                </h5>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>On Page Links Summary</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    Positive or Negative? - {data.onPageLinksSummary.feedbackDetails.found.class}
                    {data.onPageLinksSummary.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.onPageLinksSummary.feedbackDetails.found.text}</p>
                </div>
              </div>
            </div>

            <div css={maxSeoScore.maxSeoScore}>
              Max SEO Score Available
              {data.onPageLinksSummary.maxSeoScoreAvailable.toFixed(2)}
            </div>
            <div css={maxSeoScoreProgress.maxSeoScoreProgress}>
              <div css={SeoScore}>SEO Score&nbsp;&nbsp;</div>
              <div css={maxSeoScoreProgressBar.maxSeoScoreProgressBar}>
                <div css={maxSeoScoreProgressBarFill.maxSeoScoreProgressBarFill}>
                  {data.onPageLinksSummary.seoScore.toFixed(2)}/
                  {data.onPageLinksSummary.maxSeoScoreAvailable.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 css={h1.h1}>Image Analysis</h1>
          <div css={container.container}>
            <div css={leftContainer.leftContainer}>
              <div css={borderBox.borderBox}>
                <h2 css={h2.h2}>Category</h2>
                <div>Number of Images</div>
                <div>Image Contains Keyword</div>
                <div>Alt Tag Contains Keyword</div>
                <div>Keyword</div>
              </div>
            </div>

            <div css={rightContainer.rightContainer}>
              <h2 css={h2.h2}>Results</h2>
              <div>{data.imageAnalysis.numberOfImages}</div>
              <div>{data.imageAnalysis.imageNameContainsKeyword}</div>
              <div>{data.imageAnalysis.imageAltTagContainsKeyword}</div>
              <div>{data.imageAnalysis.keyword}</div>
            </div>

            <div css={bottomContainer.bottomContainer}>
              <h3>Feedback Details</h3>
              <div css={dotWrapper.dotWrapper}>
                <h5 css={h5.h5}>
                  Positive &nbsp;&nbsp;&nbsp;=<div css={dotPlus.dotPlus}></div>
                </h5>
                <h5 css={h5.h5}>
                  Negative &nbsp;=<div css={dotMinus.dotMinus}></div>
                </h5>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Image Analysis Found</div>
                <div css={imagePadding.imagePadding}>
                  <p>
                    {data.imageAnalysis.feedbackDetails.found.class}
                    {data.imageAnalysis.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.imageAnalysis.feedbackDetails.found.text}</p>
                </div>
              </div>

              <div css={feedbackDetails.feedbackDetails}>
                <div>Image Name Contains Keyword</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {data.imageAnalysis.feedbackDetails.found.class}
                    {data.imageAnalysis.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.imageAnalysis.feedbackDetails.found.text}</p>
                </div>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Image Alt Contains Keyword</div>
                <div css={imagePadding.imagePadding}>
                  <p css={p.p}>
                    {data.imageAnalysis.feedbackDetails.found.class}
                    {data.imageAnalysis.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.imageAnalysis.feedbackDetails.found.text}</p>
                </div>
              </div>
            </div>

            <div css={maxSeoScore.maxSeoScore}>
              Max SEO Score Available
              {data.imageAnalysis.maxSeoScoreAvailable.toFixed(2)}
            </div>
            <div css={maxSeoScoreProgress.maxSeoScoreProgress}>
              <div css={SeoScore}>SEO Score&nbsp;&nbsp;</div>
              <div css={maxSeoScoreProgressBar.maxSeoScoreProgressBar}>
                <div css={maxSeoScoreProgressBarFill.maxSeoScoreProgressBarFill}>
                  {data.imageAnalysis.seoScore.toFixed(2)}/
                  {data.imageAnalysis.maxSeoScoreAvailable.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 css={h1.h1}>Keyword Density</h1>
          <div css={container.container}>
            <div css={leftContainer.leftContainer}>
              <div css={borderBox.borderBox}>
                <h2 css={h2.h2}>Category</h2>
                <div>Keyword</div>
                <div>Keyword Density</div>
              </div>
            </div>

            <div css={rightContainer.rightContainer}>
              <h2 css={h2.h2}>Results</h2>
              <div>{data.keywordDensity.keyword}</div>
              <div>{data.keywordDensity.keywordDensity}</div>
            </div>

            <div css={bottomContainer.bottomContainer}>
              <h3>Feedback Details</h3>
              <div css={dotWrapper.dotWrapper}>
                <h5 css={h5.h5}>
                  Positive &nbsp;&nbsp;&nbsp;=<div css={dotPlus.dotPlus}></div>
                </h5>
                <h5 css={h5.h5}>
                  Negative &nbsp;=<div css={dotMinus.dotMinus}></div>
                </h5>
              </div>
              <div css={feedbackDetails.feedbackDetails}>
                <div>Keyword Density</div>
                <div css={feedbackDetailExtra.feedbackDetailExtra}>
                  <p css={p.p}>
                    {data.keywordDensity.feedbackDetails.found.class}
                    {data.keywordDensity.feedbackDetails.found.class == 'positive' ? (
                      <div css={summaryDotGreen.summaryDotGreen}></div>
                    ) : (
                      <div css={summaryDotRed.summaryDotRed}></div>
                    )}
                  </p>
                  <p css={p.p}>{data.keywordDensity.feedbackDetails.found.text}</p>
                </div>
              </div>
            </div>

            <div css={maxSeoScore.maxSeoScore}>
              Max SEO Score Available {data.keywordDensity.maxSeoScoreAvailable.toFixed(2)}
            </div>
            <div css={maxSeoScoreProgress.maxSeoScoreProgress}>
              <div css={SeoScore}>SEO Score&nbsp;&nbsp;</div>
              <div css={maxSeoScoreProgressBar.maxSeoScoreProgressBar}>
                <div css={maxSeoScoreProgressBarFill.maxSeoScoreProgressBarFill}>
                  {data.keywordDensity.seoScore.toFixed(2)}/
                  {data.keywordDensity.maxSeoScoreAvailable.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
    console.log('I am a working modal'),
    10000;
};

export const getIframeHTMLContent = (): Promise<string> => {
  return appState.designerState.evaluateInFrame(() =>
    new XMLSerializer().serializeToString(document)
  );
};

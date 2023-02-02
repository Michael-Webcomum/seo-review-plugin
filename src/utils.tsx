import React from 'react';
// import * as ReactDOM from 'react-dom';
import appState, { globalState } from '@builder.io/app-context';
import { Builder } from '@builder.io/react';
import { Button } from '@material-ui/core';
import { formatSeoData } from './formatSeoData';
import './styles.css';

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
    <div className="modalStyles" id="element0">
      {/* <button className="button-default" onClick={closeModal}>
				Show Modal
			</button> */}
      <div className="modalTitle">SEO Review Results</div>
      <h1>Overview</h1>
      <div className="container">
        <div className="leftContainer">
          <div className="borderBox">
            <h2>Category</h2>
            <div>Keyword</div>
            <div>Overall SEO Score</div>
            <div>Available SEO Points</div>
            <div>Earned SEO Points</div>
          </div>
        </div>

        <div className="rightContainer">
          <h2>Results</h2>
          <div className="feedbackSummary">
            <div className="feedbackDetailTitle">Feedback Summary</div>

            <div>
              <div>
                Optimized
                <div className="summaryDotGreen">{data.overview.summary.optimized}</div>
              </div>
              <div>
                Warnings
                <div className="summaryDotYellow">{data.overview.summary.warnings}</div>
              </div>
              <div>
                Errors
                <div className="summaryDotRed">{data.overview.summary.errors}</div>
              </div>
            </div>
          </div>

          <div>{data.overview.keyword}</div>
          <div className="pbwrapper">
            <div className="progressBar">
              <p className="progressBarFill" id="myProgressBar">
                {data.overview.overallSeoScore}/100
              </p>
            </div>
          </div>
          <div>{data.overview.availableSeoPoints}</div>
          <div className="pbwrapper">
            <div className="progressBar">
              <p className="progressBarFill">
                {data.overview.earnedSeoPoints}/{data.overview.availableSeoPoints}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1>Title Tag</h1>
      <div className="container">
        <div className="leftContainer">
          <div className="borderBox">
            <h2>Category</h2>
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

        <div className="rightContainer">
          <h2>Results</h2>
          <div>{data.titleTag.Result}</div>
          <div>{data.titleTag.titleFound}</div>
          <div>{data.titleTag.titleTag}</div>
          <div>{data.titleTag.titleLength}</div>
          <div>{data.titleTag.titleTagNumber}</div>
          <div>{data.titleTag.focusKeywordsPosition}</div>
          <div>{data.titleTag.focusKeywordsFound}</div>
          <div>{data.titleTag.keyword}</div>
        </div>

        <div className="bottomContainer">
          <h3>Feedback Details</h3>
          <h5>Positive or Negative?</h5>
          <div>
            <div className="summaryDotGreen"></div>&nbsp;&nbsp; or &nbsp;
            <div className="summaryDotRed"></div>
          </div>

          <div className="feedbackDetails">
            <div>
              {data.titleTag.feedbackDetails.found.text ==
              data.titleTag.feedbackDetails.found.text ? (
                <div>Title Tag Not Found</div>
              ) : (
                <div>Title Tag Found - {data.titleTag.feedbackDetails.found.text}</div>
              )}
            </div>
            <div className="feedbackDetailExtra">
              <p>
                {' '}
                {data.titleTag.feedbackDetails.found.class}
                {data.titleTag.feedbackDetails.found.class == 'positive' ? (
                  <div className="summaryDotGreen"></div>
                ) : (
                  <div className="summaryDotRed"></div>
                )}
              </p>
              <p>{data.titleTag.feedbackDetails.found.text}</p>
            </div>
          </div>
          <div className="feedbackDetails">
            <div>Length</div>
            <div className="feedbackDetailExtra">
              <p>
                {' '}
                {data.titleTag.feedbackDetails.length.class}
                {data.titleTag.feedbackDetails.length.class == 'positive' ? (
                  <div className="summaryDotGreen"></div>
                ) : (
                  <div className="summaryDotRed"></div>
                )}
              </p>
              <p>{data.titleTag.feedbackDetails.length.text}</p>
            </div>
          </div>
          <div className="feedbackDetails">
            <div>Focus Keyword</div>
            <div className="feedbackDetailExtra">
              <p>
                {' '}
                {data.titleTag.feedbackDetails.focusKeyword.class}
                {data.titleTag.feedbackDetails.focusKeyword.class == 'positive' ? (
                  <div className="summaryDotGreen"></div>
                ) : (
                  <div className="summaryDotRed"></div>
                )}
              </p>
              <p>{data.titleTag.feedbackDetails.focusKeyword.text}</p>
            </div>
          </div>
          <div className="feedbackDetails">
            <div>Focus Keyword Position</div>
            <div className="feedbackDetailExtra">
              <p>
                {' '}
                {data.titleTag.feedbackDetails.focusKeywordsPosition.class}
                {data.titleTag.feedbackDetails.focusKeywordsPosition.class == 'positive' ? (
                  <div className="summaryDotGreen"></div>
                ) : (
                  <div className="summaryDotRed"></div>
                )}
              </p>
              <p>{data.titleTag.feedbackDetails.focusKeywordsPosition.text}</p>
            </div>
          </div>
        </div>
        <div className="maxSeoScore">
          Max SEO Score Available = {data.titleTag.maxSeoScoreAvailable}
        </div>
        <div className="maxSeoScoreProgress">
          <div>SEO Score</div>
          <div className="maxSeoScoreProgressBar">
            <div className="maxSeoScoreProgressBarFill">
              {data.titleTag.seoScore}/{data.titleTag.maxSeoScoreAvailable}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Meta Description</h1>
        <div className="container">
          <div className="leftContainer">
            <div className="borderBox">
              <h2>Category</h2>
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

          <div className="rightContainer">
            <h2>Results</h2>
            <div>{data.metaDescription.result}</div>
            <div>{data.metaDescription.metaDescriptionFound}</div>
            <div>{data.metaDescription.metaDescription}</div>
            <div>{data.metaDescription.metaDescriptionLength}</div>
            <div>{data.metaDescription.metaDescriptionNumber}</div>
            <div>{data.metaDescription.focusKeywordsPosition}</div>
            <div>{data.metaDescription.focusKeywordsFound}</div>
            <div>{data.metaDescription.keyword}</div>
          </div>

          <div className="bottomContainer">
            <h3>Feedback Details</h3>
            <h5>Positive or Negative?</h5>
            <div>
              <div className="summaryDotGreen"></div>&nbsp;&nbsp; or &nbsp;
              <div className="summaryDotRed"></div>
            </div>

            <div className="feedbackDetails">
              <div>
                {data.metaDescription.feedbackDetails.found.text ==
                data.metaDescription.feedbackDetails.found.text ? (
                  <div>Meta Description Not Found</div>
                ) : (
                  <div>Meta Description Found -{data.titleTag.feedbackDetails.found.text}</div>
                )}
              </div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.metaDescription.feedbackDetails.found.class}
                  {data.metaDescription.feedbackDetails.found.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.metaDescription.feedbackDetails.found.text}</p>
              </div>
            </div>
            <div className="feedbackDetails">
              <div>Length</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.metaDescription.feedbackDetails.length.class}
                  {data.metaDescription.feedbackDetails.length.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.metaDescription.feedbackDetails.length.text}</p>
              </div>
            </div>
            <div className="feedbackDetails">
              <div>Focus Keyword</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.metaDescription.feedbackDetails.focusKeyword.class}
                  {data.metaDescription.feedbackDetails.focusKeyword.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.metaDescription.feedbackDetails.focusKeyword.text}</p>
              </div>
            </div>
            <div className="feedbackDetails">
              <div>Focus Keywords Position</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.metaDescription.feedbackDetails.focusKeywordsPosition.class}
                  {data.metaDescription.feedbackDetails.focusKeywordsPosition.class ==
                  'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.metaDescription.feedbackDetails.focusKeywordsPosition.text}</p>
              </div>
            </div>
          </div>

          <div className="maxSeoScore">
            Max SEO Score Available = {data.metaDescription.maxSeoScoreAvailable}
          </div>
          <div className="maxSeoScoreProgress">
            <div>SEO Score</div>
            <div className="maxSeoScoreProgressBar">
              <div className="maxSeoScoreProgressBarFill">
                {data.metaDescription.seoScore}/{data.metaDescription.maxSeoScoreAvailable}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Page Headings Summary</h1>
        <div className="container">
          <div className="leftContainer">
            <div className="borderBox">
              <h2>Category</h2>
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
          <div className="rightContainer">
            <h2>Results</h2>
            <div>{data.pageHeadingsSummary.h1}</div>
            <div>{data.pageHeadingsSummary.h2}</div>
            <div>{data.pageHeadingsSummary.h3}</div>
            <div>{data.pageHeadingsSummary.h4}</div>
            <div>{data.pageHeadingsSummary.h5}</div>
            <div>{data.pageHeadingsSummary.h6}</div>
            <div>{data.pageHeadingsSummary.h1Count}</div>
            <div>{data.pageHeadingsSummary.h1Content}</div>
            <div>{data.pageHeadingsSummary.focusKeywordsFound}</div>
            <div>{data.pageHeadingsSummary.keyword}</div>
          </div>

          <div className="bottomContainer">
            <h3>Feedback Details</h3>
            <h5>Positive or Negative?</h5>
            <div>
              <div className="summaryDotGreen"></div>&nbsp;&nbsp; or &nbsp;
              <div className="summaryDotRed"></div>
            </div>
            <div className="feedbackDetails">
              <div>Page Headings Summary</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.pageHeadingsSummary.feedbackDetails.notFound.class}
                  {data.pageHeadingsSummary.feedbackDetails.notFound.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.pageHeadingsSummary.feedbackDetails.notFound.text}</p>
              </div>
            </div>
            <div className="feedbackDetails">
              <div>Focus Keyword</div>
              <div className="feedbackDetailExtra">
                <p>{data.pageHeadingsSummary.feedbackDetails.focusKeyword.text}</p>
                <p>
                  {data.pageHeadingsSummary.feedbackDetails.focusKeyword.class}
                  {data.pageHeadingsSummary.feedbackDetails.focusKeyword.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="maxSeoScore">
            Max SEO Score Available
            {data.pageHeadingsSummary.maxSeoScoreAvailable}
          </div>
          <div className="maxSeoScoreProgress">
            <div>SEO Score</div>
            <div className="maxSeoScoreProgressBar">
              <div className="maxSeoScoreProgressBarFill">
                {data.pageHeadingsSummary.seoScore}/{data.pageHeadingsSummary.maxSeoScoreAvailable}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Word Count</h1>
        <div className="container">
          <div className="leftContainer">
            <div className="borderBox">
              <h2>Category</h2>
              <div>Word Count Total</div>
              <div>Corrected Word Count</div>
              <div>Anchor Text Words</div>
              <div>Anchor Percentage</div>
            </div>
          </div>

          <div className="rightContainer">
            <h2>Results</h2>
            <div>{data.wordCount.wordCountTotal}</div>
            <div>{data.wordCount.correctedWordCount}</div>
            <div>{data.wordCount.anchorTextWords}</div>
            <div>{data.wordCount.anchorPercentage}</div>
          </div>

          <div className="bottomContainer">
            <h3>Feedback Details</h3>
            <h5>Positive or Negative?</h5>
            <div>
              <div className="summaryDotGreen"></div>&nbsp;&nbsp; or &nbsp;
              <div className="summaryDotRed"></div>
            </div>
            <div className="feedbackDetails">
              <div>Word Count</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.wordCount.feedbackDetails.found.class}
                  {data.wordCount.feedbackDetails.found.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.wordCount.feedbackDetails.found.text}</p>
              </div>
            </div>
          </div>

          <div className="maxSeoScore">
            Max SEO Score Available
            {data.wordCount.maxSeoScoreAvailable}
          </div>
          <div className="maxSeoScoreProgress">
            <div>SEO Score</div>
            <div className="maxSeoScoreProgressBar">
              <div className="maxSeoScoreProgressBarFill">
                {data.wordCount.seoScore}/{data.wordCount.maxSeoScoreAvailable}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>On Page Links Summary</h1>
        <div className="container">
          <div className="leftContainer">
            <div className="borderBox">
              <h2>Category</h2>
              <div>Total Links</div>
              <div>External Links</div>
              <div>Internal Links</div>
              <div>No Follow Count</div>
              <div>Duplicate Links</div>
              <div>No Alt Tag</div>
            </div>
          </div>

          <div className="rightContainer">
            <h2>Results</h2>
            <div>{data.onPageLinksSummary.totalLinks}</div>
            <div>{data.onPageLinksSummary.externalLinks}</div>
            <div>{data.onPageLinksSummary.internalLinks}</div>
            <div>{data.onPageLinksSummary.noFollowCount}</div>
            <div>{data.onPageLinksSummary.duplicateLinks}</div>
            <div>{data.onPageLinksSummary.noAltTag}</div>
          </div>

          <div className="bottomContainer">
            <h3>Feedback Details</h3>
            <div>
              <div className="summaryDotGreen"></div>&nbsp;&nbsp; or &nbsp;
              <div className="summaryDotRed"></div>
            </div>
            <div className="feedbackDetails">
              <div>On Page Links Summary</div>
              <div className="feedbackDetailExtra">
                <p>
                  Positive or Negative? - {data.onPageLinksSummary.feedbackDetails.found.class}
                  {data.onPageLinksSummary.feedbackDetails.found.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.onPageLinksSummary.feedbackDetails.found.text}</p>
              </div>
            </div>
          </div>

          <div className="maxSeoScore">
            Max SEO Score Available
            {data.onPageLinksSummary.maxSeoScoreAvailable}
          </div>
          <div className="maxSeoScoreProgress">
            <div>SEO Score</div>
            <div className="maxSeoScoreProgressBar">
              <div className="maxSeoScoreProgressBarFill">
                {data.onPageLinksSummary.seoScore}/{data.onPageLinksSummary.maxSeoScoreAvailable}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Image Analysis</h1>
        <div className="container">
          <div className="leftContainer">
            <div className="borderBox">
              <h2>Category</h2>
              <div>Number of Images</div>
              <div>Image Contains Keyword</div>
              <div>Alt Tag Contains Keyword</div>
              <div>Keyword</div>
            </div>
          </div>

          <div className="rightContainer">
            <h2>Results</h2>
            <div>{data.imageAnalysis.numberOfImages}</div>
            <div>{data.imageAnalysis.imageNameContainsKeyword}</div>
            <div>{data.imageAnalysis.imageAltTagContainsKeyword}</div>
            <div>{data.imageAnalysis.keyword}</div>
          </div>

          <div className="bottomContainer">
            <h3>Feedback Details</h3>
            <h5>Positive or Negative</h5>
            <div>
              <div className="summaryDotGreen"></div>&nbsp;&nbsp; or &nbsp;
              <div className="summaryDotRed"></div>
            </div>
            <div className="feedbackDetails">
              <div>Image Analysis</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.imageAnalysis.feedbackDetails.found.class}
                  {data.imageAnalysis.feedbackDetails.found.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.imageAnalysis.feedbackDetails.found.text}</p>
              </div>
            </div>

            <div className="feedbackDetails">
              <div>Image Name Contains Keyword</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.imageAnalysis.feedbackDetails.found.class}
                  {data.imageAnalysis.feedbackDetails.found.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.imageAnalysis.feedbackDetails.found.text}</p>
              </div>
            </div>
            <div className="feedbackDetails">
              <div>Image Alt Tag Contains Keyword</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.imageAnalysis.feedbackDetails.found.class}
                  {data.imageAnalysis.feedbackDetails.found.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.imageAnalysis.feedbackDetails.found.text}</p>
              </div>
            </div>
          </div>

          <div className="maxSeoScore">
            Max SEO Score Available
            {data.imageAnalysis.maxSeoScoreAvailable}
          </div>
          <div className="maxSeoScoreProgress">
            <div>SEO Score</div>
            <div className="maxSeoScoreProgressBar">
              <div className="maxSeoScoreProgressBarFill">
                {data.imageAnalysis.seoScore}/{data.imageAnalysis.maxSeoScoreAvailable}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Keyword Density</h1>
        <div className="container">
          <div className="leftContainer">
            <div className="borderBox">
              <h2>Category</h2>
              <div>Keyword</div>
              <div>Keyword Density</div>
            </div>
          </div>

          <div className="rightContainer">
            <h2>Results</h2>
            <div>{data.keywordDensity.keyword}</div>
            <div>{data.keywordDensity.keywordDensity}</div>
          </div>

          <div className="bottomContainer">
            <h3>Feedback Details</h3>
            <h5>Positive or Negative?</h5>
            <div>
              <div className="summaryDotGreen"></div>&nbsp;&nbsp; or &nbsp;
              <div className="summaryDotRed"></div>
            </div>
            <div className="feedbackDetails">
              <div>Keyword Density</div>
              <div className="feedbackDetailExtra">
                <p>
                  {data.keywordDensity.feedbackDetails.found.class}
                  {data.keywordDensity.feedbackDetails.found.class == 'positive' ? (
                    <div className="summaryDotGreen"></div>
                  ) : (
                    <div className="summaryDotRed"></div>
                  )}
                </p>
                <p>{data.keywordDensity.feedbackDetails.found.text}</p>
              </div>
            </div>
          </div>

          <div className="maxSeoScore">
            Max SEO Score Available
            <div>{data.keywordDensity.maxSeoScoreAvailable}</div>
          </div>
          <div className="maxSeoScoreProgress">
            <div>SEO Score</div>
            <div className="maxSeoScoreProgressBar">
              <div className="maxSeoScoreProgressBarFill">
                {data.keywordDensity.seoScore}/{data.keywordDensity.maxSeoScoreAvailable}
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

import React from "react";
import appState, { globalState } from "@builder.io/app-context";
import { Builder } from "@builder.io/react";
import { Button } from "@material-ui/core";
import { formatSeoData } from "./formatSeoData";
import "./styles.css";

export const registerContentAction = (contentAction: {
	label: string;
	showIf(content: any, model: any): Boolean;
	onClick(content: any): Promise<void>;
}) => {
	Builder.register("content.action", contentAction);
};

export const fastClone = (obj: any) =>
	obj === undefined ? undefined : JSON.parse(JSON.stringify(obj));

export const seoReviewModelName = "seo-review-history";
export const getSEOReviewModel = () =>
	appState.models.result.find((m: any) => m.name === seoReviewModelName);
export const getSEOReviewModelTemplate = () => ({
	"@version": 2,
	name: seoReviewModelName,
	kind: "data" as const,
	subType: "",
	schema: {},
	publishText: "Authorize",
	unPublishText: "Cancel",
	fields: [
		{
			"@type": "@builder.io/core:Field",
			name: "description",
			type: "text",
			required: false,
			helperText: "Example field",
		},
	],
	helperText: "Seo Reviews History",
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
		<div style={{ display: "flex", alignItems: "center" }}>Done!</div>,
		100000,
		<Button
			color="primary"
			style={{
				pointerEvents: "auto",
				...(appState.document.small && {
					width: "calc(100vw - 90px)",
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
		<div className="modalStyles">
			<div className="modalTitle">SEO Review Results</div>
			<div className="modalText">
				<div className="subTitles">Overview:</div>

				<div className="spanTag">
					Keyword <span>{data.overview.keyword}</span>
				</div>

				<div className="pbwrapper">
					<div>Overall SEO Score</div>
					<progress
						className="progressBar"
						// value={data.overview.overallSeoScore}
						data-before={data.overview.overallSeoScore}
					>
						<span className="progressBarFill"></span>
					</progress>
					{/* <div className="progressBar">
						<div className="progressBarFill">
							{data.overview.overallSeoScore}/100
						</div>
					</div> */}
				</div>

				<div className="spanTag">
					Available SEO Points <span>{data.overview.availableSeoPoints}</span>
				</div>

				<div className="pbwrapper">
					<div>Earned SEO Points</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.overview.earnedSeoPoints}/{data.overview.availableSeoPoints}
						</div>
					</div>
				</div>

				<div>
					<div className="feedbackDetailTitle">Summary: </div>
					<div className="feedbackDetails">
						<div className="spanTag">
							<span>
								Errors - {data.overview.summary.errors}
								<span className="summaryDotRed"></span>
							</span>
							<span>
								Warnings - {data.overview.summary.warnings}
								<span className="summaryDotYellow"></span>
							</span>
							<span>
								Optimized - {data.overview.summary.optimized}
								<span className="summaryDotGreen"></span>
							</span>
						</div>
					</div>
				</div>
			</div>

			<br />

			<div className="modalText">
				<div className="subTitles">Title Tag:</div>

				<div className="spanTag">
					Result <span>{data.titleTag.Result}</span>
				</div>
				<div className="spanTag">
					Title Found <span>{data.titleTag.titleFound}</span>
				</div>
				<div className="spanTag">
					Input URL <span>{data.titleTag.inputUrl}</span>
				</div>
				<div className="spanTag">
					Title Tag <span>{data.titleTag.titleTag}</span>
				</div>
				<div className="spanTag">
					Title Length <span>{data.titleTag.titleLength}</span>
				</div>
				<div className="spanTag">
					Title Tag Number <span>{data.titleTag.titleTagNumber}</span>
				</div>
				<div className="spanTag">
					Focus Keywords Position{" "}
					<span>{data.titleTag.focusKeywordsPosition}</span>
				</div>
				<div className="spanTag">
					Focus Keywords Found <span>{data.titleTag.focusKeywordsFound}</span>
				</div>
				<div className="spanTag">
					Keyword <span>{data.titleTag.keyword}</span>
				</div>
				<div>
					<div className="feedbackDetailTitle">Feedback Details:</div>
					<div>
						<div className="feedbackDetails">
							{data.titleTag.feedbackDetails.found.text ==
							data.titleTag.feedbackDetails.found.text ? (
								<div>Title Tag Not Found</div>
							) : (
								<div>Found: {data.titleTag.feedbackDetails.found.text}</div>
							)}
						</div>
						<div className="feedbackDetailExtra">
							<p>{data.titleTag.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.titleTag.feedbackDetails.found.class}
								{data.titleTag.feedbackDetails.found.class == "positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">Length:</div>
						<div className="feedbackDetailExtra">
							<p>{data.titleTag.feedbackDetails.length.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.titleTag.feedbackDetails.length.class}
								{data.titleTag.feedbackDetails.length.class == "positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">Focus Keyword:</div>
						<div className="feedbackDetailExtra">
							<p>{data.titleTag.feedbackDetails.focusKeyword.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.titleTag.feedbackDetails.focusKeyword.class}
								{data.titleTag.feedbackDetails.focusKeyword.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">Focus Keyword Position:</div>
						<div className="feedbackDetailExtra">
							<p>{data.titleTag.feedbackDetails.focusKeywordsPosition.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.titleTag.feedbackDetails.focusKeywordsPosition.class}
								{data.titleTag.feedbackDetails.focusKeywordsPosition.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className="spanTag">
					Max SEO Score Available
					<span>{data.titleTag.maxSeoScoreAvailable}</span>
				</div>
				<div className="pbwrapper">
					<div>SEO Score</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.titleTag.seoScore}/{data.titleTag.maxSeoScoreAvailable}
						</div>
					</div>
				</div>
			</div>

			<br />

			<div className="modalText">
				<div className="subTitles">Meta Description:</div>
				<div className="spanTag">
					Result <span>{data.metaDescription.result}</span>
				</div>
				<div className="spanTag">
					Meta Description Found
					<span>{data.metaDescription.metaDescriptionFound}</span>
				</div>
				<div className="spanTag">
					Meta Description <span>{data.metaDescription.metaDescription}</span>
				</div>
				<div className="spanTag">
					Meta Description Length{" "}
					<span>{data.metaDescription.metaDescriptionLength}</span>
				</div>
				<div className="spanTag">
					Meta Description Number{" "}
					<span>{data.metaDescription.metaDescriptionNumber}</span>
				</div>
				<div className="spanTag">
					Focus Keywords Position{" "}
					<span>{data.metaDescription.focusKeywordsPosition}</span>
				</div>
				<div className="spanTag">
					Focus Keywords Found{" "}
					<span>{data.metaDescription.focusKeywordsPosition}</span>
				</div>
				<div className="spanTag">
					Keyword <span>{data.metaDescription.keyword}</span>
				</div>
				<div>
					<div className="feedbackDetailTitle">Feedback Details:</div>
					<div>
						<div className="feedbackDetails">
							{data.metaDescription.feedbackDetails.found.text ==
							data.metaDescription.feedbackDetails.found.text ? (
								<div>Meta Description Not Found</div>
							) : (
								<div>Found: {data.titleTag.feedbackDetails.found.text}</div>
							)}
						</div>
						<div className="feedbackDetailExtra">
							<p>{data.metaDescription.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.metaDescription.feedbackDetails.found.class}
								{data.metaDescription.feedbackDetails.found.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">Length:</div>
						<div className="feedbackDetailExtra">
							<p>{data.metaDescription.feedbackDetails.length.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.metaDescription.feedbackDetails.length.class}
								{data.metaDescription.feedbackDetails.length.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">Focus Keyword:</div>
						<div className="feedbackDetailExtra">
							<p>{data.metaDescription.feedbackDetails.focusKeyword.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.metaDescription.feedbackDetails.focusKeyword.class}
								{data.metaDescription.feedbackDetails.focusKeyword.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">Focus Keywords Position:</div>
						<div className="feedbackDetailExtra">
							<p>
								{
									data.metaDescription.feedbackDetails.focusKeywordsPosition
										.text
								}
							</p>
							<p>
								Positive or Negative? -{" "}
								{
									data.metaDescription.feedbackDetails.focusKeywordsPosition
										.class
								}
								{data.metaDescription.feedbackDetails.focusKeywordsPosition
									.class == "positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className="spanTag">
					Max SEO Score Available
					<span>{data.metaDescription.maxSeoScoreAvailable}</span>
				</div>
				<div className="pbwrapper">
					<div>SEO Score</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.metaDescription.seoScore}/
							{data.metaDescription.maxSeoScoreAvailable}
						</div>
					</div>
				</div>
			</div>

			<br />

			<div className="modalText">
				<div className="subTitles">Page Headings Summary:</div>
				<div className="spanTag">
					Result <span>{data.metaDescription.result}</span>
				</div>
				<div className="spanTag">
					H1 <span>{data.pageHeadingsSummary.h1}</span>
				</div>
				<div className="spanTag">
					H2 <span>{data.pageHeadingsSummary.h2}</span>{" "}
				</div>
				<div className="spanTag">
					H3 <span>{data.pageHeadingsSummary.h3}</span>{" "}
				</div>
				<div className="spanTag">
					H4 <span>{data.pageHeadingsSummary.h4}</span>{" "}
				</div>
				<div className="spanTag">
					H5 <span>{data.pageHeadingsSummary.h5}</span>{" "}
				</div>
				<div className="spanTag">
					H6 <span>{data.pageHeadingsSummary.h6}</span>{" "}
				</div>
				<div className="spanTag">
					H1 Count <span>{data.pageHeadingsSummary.h1Count}</span>{" "}
				</div>
				<div className="spanTag">
					H1 Content <span>{data.pageHeadingsSummary.h1Content}</span>{" "}
				</div>
				<div className="spanTag">
					Focus Keywords Found{" "}
					<span>{data.pageHeadingsSummary.focusKeywordsFound}</span>{" "}
				</div>
				<div className="spanTag">
					Keyword <span>{data.pageHeadingsSummary.keyword}</span>{" "}
				</div>
				<div>
					<div className="feedbackDetailTitle">Feedback Details:</div>
					<div>
						<div className="feedbackDetails">Not Found:</div>
						<div className="feedbackDetailExtra">
							<p>{data.pageHeadingsSummary.feedbackDetails.notFound.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.pageHeadingsSummary.feedbackDetails.notFound.class}
								{data.pageHeadingsSummary.feedbackDetails.notFound.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">Focus Keyword:</div>
						<div className="feedbackDetailExtra">
							<p>
								{data.pageHeadingsSummary.feedbackDetails.focusKeyword.text}
							</p>
							<p>
								Positive or Negative? -{" "}
								{data.pageHeadingsSummary.feedbackDetails.focusKeyword.class}
								{data.pageHeadingsSummary.feedbackDetails.focusKeyword.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className="spanTag">
					Max SEO Score Available
					<span>{data.pageHeadingsSummary.maxSeoScoreAvailable}</span>
				</div>
				<div className="pbwrapper">
					<div>SEO Score</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.pageHeadingsSummary.seoScore}/
							{data.pageHeadingsSummary.maxSeoScoreAvailable}
						</div>
					</div>
				</div>
			</div>

			<br />

			<div className="modalText">
				<div className="subTitles">Word Count:</div>
				<div className="spanTag">
					Input URL <span>{data.wordCount.inputUrl}</span>
				</div>
				<div className="spanTag">
					Word Count Total <span>{data.wordCount.wordCountTotal}</span>
				</div>
				<div className="spanTag">
					Corrected Word Count <span>{data.wordCount.correctedWordCount}</span>
				</div>
				<div className="spanTag">
					Anchor Text Words <span>{data.wordCount.anchorTextWords}</span>
				</div>
				<div className="spanTag">
					Anchor Percentage <span>{data.wordCount.anchorPercentage}</span>
				</div>
				<div>
					<div className="feedbackDetailTitle">Feedback Details:</div>
					<div>
						<div className="feedbackDetailExtra">
							<p>{data.wordCount.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.wordCount.feedbackDetails.found.class}
								{data.wordCount.feedbackDetails.found.class == "positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className="spanTag">
					Max SEO Score Available
					<span>{data.wordCount.maxSeoScoreAvailable}</span>
				</div>
				<div className="pbwrapper">
					<div>SEO Score</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.wordCount.seoScore}/{data.wordCount.maxSeoScoreAvailable}
						</div>
					</div>
				</div>
			</div>

			<br />

			<div className="modalText">
				<div className="subTitles">On Page Links Summary:</div>
				<div className="spanTag">
					Input URL <span>{data.wordCount.inputUrl}</span>
				</div>
				<div className="spanTag">
					Total Links <span>{data.onPageLinksSummary.totalLinks}</span>
				</div>
				<div className="spanTag">
					External Links <span>{data.onPageLinksSummary.externalLinks}</span>
				</div>
				<div className="spanTag">
					Internal Links <span>{data.onPageLinksSummary.internalLinks}</span>
				</div>
				<div className="spanTag">
					No Follow Count <span>{data.onPageLinksSummary.noFollowCount}</span>
				</div>
				<div className="spanTag">
					Duplicate Links <span>{data.onPageLinksSummary.duplicateLinks}</span>
				</div>
				<div className="spanTag">
					No Alt Tag <span>{data.onPageLinksSummary.noAltTag}</span>
				</div>
				<div>
					<div className="feedbackDetailTitle">Feedback Details:</div>
					<div>
						<div className="feedbackDetails">Found:</div>
						<div className="feedbackDetailExtra">
							<p>{data.onPageLinksSummary.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.onPageLinksSummary.feedbackDetails.found.class}
								{data.onPageLinksSummary.feedbackDetails.found.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className="spanTag">
					Max SEO Score Available
					<span>{data.onPageLinksSummary.maxSeoScoreAvailable}</span>
				</div>
				<div className="pbwrapper">
					<div>SEO Score</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.onPageLinksSummary.seoScore}/
							{data.onPageLinksSummary.maxSeoScoreAvailable}
						</div>
					</div>
				</div>
			</div>

			<br />

			<div className="modalText">
				<div className="subTitles">Image Analysis:</div>
				<div className="spanTag">
					Number of Images <span>{data.imageAnalysis.numberOfImages}</span>
				</div>
				<div className="spanTag">
					Image Name Contains Keyword{" "}
					<span>{data.imageAnalysis.imageNameContainsKeyword}</span>
				</div>
				<div className="spanTag">
					Image Alt Tag Contains Keyword{" "}
					<span>{data.imageAnalysis.imageAltTagContainsKeyword}</span>
				</div>
				<div className="spanTag">
					Keyword <span>{data.imageAnalysis.keyword}</span>
				</div>
				<div>
					<div className="feedbackDetailTitle">Feedback Details:</div>
					<div>
						<div className="feedbackDetails">Found:</div>
						<div className="feedbackDetailExtra">
							<p>{data.imageAnalysis.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.imageAnalysis.feedbackDetails.found.class}
								{data.imageAnalysis.feedbackDetails.found.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>

					<div>
						<div className="feedbackDetails">Image Name Contains Keyword:</div>
						<div className="feedbackDetailExtra">
							<p>{data.imageAnalysis.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.imageAnalysis.feedbackDetails.found.class}
								{data.imageAnalysis.feedbackDetails.found.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
					<div>
						<div className="feedbackDetails">
							Image Alt Tag Contains Keyword:
						</div>
						<div className="feedbackDetailExtra">
							<p>{data.imageAnalysis.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.imageAnalysis.feedbackDetails.found.class}
								{data.imageAnalysis.feedbackDetails.found.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className="spanTag">
					Max SEO Score Available
					<span>{data.imageAnalysis.maxSeoScoreAvailable}</span>
				</div>
				<div className="pbwrapper">
					<div>SEO Score</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.imageAnalysis.seoScore}/
							{data.imageAnalysis.maxSeoScoreAvailable}
						</div>
					</div>
				</div>
			</div>

			<br />

			<div className="modalText">
				<div className="subTitles">Keyword Density:</div>
				<div className="spanTag">
					Keyword <span>{data.keywordDensity.keyword}</span>
				</div>
				<div className="spanTag">
					Keyword Density <span>{data.keywordDensity.keywordDensity}</span>
				</div>
				<div>
					<div className="feedbackDetailTitle">Feedback Details:</div>
					<div>
						<div className="feedbackDetailExtra">
							<p>{data.keywordDensity.feedbackDetails.found.text}</p>
							<p>
								Positive or Negative? -{" "}
								{data.keywordDensity.feedbackDetails.found.class}
								{data.keywordDensity.feedbackDetails.found.class ==
								"positive" ? (
									<span className="summaryDotGreen"></span>
								) : (
									<span className="summaryDotRed"></span>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className="spanTag">
					Max SEO Score Available
					<span>{data.keywordDensity.maxSeoScoreAvailable}</span>
				</div>
				<div className="pbwrapper">
					<div>SEO Score</div>
					<div className="progressBar">
						<div className="progressBarFill">
							{data.keywordDensity.seoScore}/
							{data.keywordDensity.maxSeoScoreAvailable}
						</div>
					</div>
				</div>
			</div>
		</div>,
		console.log("I am a working modal"),
		10000
	);
};

export const getIframeHTMLContent = (): Promise<string> => {
	return appState.designerState.evaluateInFrame(() =>
		new XMLSerializer().serializeToString(document)
	);
};

import { gql } from 'apollo-server-express';

import { types as CommonTypes } from './common';

import {
  mutations as UserMutations,
  queries as UserQueries,
  types as UserTypes
} from './user';

import {
  mutations as CompanyMutations,
  queries as CompanyQueries,
  types as CompanyTypes
} from './company';

import {
  mutations as ChannelMutations,
  queries as ChannelQueries,
  types as ChannelTypes
} from './channel';

import {
  mutations as BrandMutations,
  queries as BrandQueries,
  types as BrandTypes
} from './brand';

import {
  mutations as PermissionMutations,
  queries as PermissionQueries,
  types as PermissionTypes
} from './permission';

import {
  mutations as IntegrationMutations,
  queries as IntegrationQueries,
  types as IntegrationTypes
} from './integration';

import {
  mutations as ResponseTemplateMutations,
  queries as ResponseTemplateQueries,
  types as ResponseTemplate
} from './responseTemplate';

import {
  mutations as ScriptMutations,
  queries as ScriptQueries,
  types as Script
} from './script';

import {
  mutations as EmailTemplateMutations,
  queries as EmailTemplateQueries,
  types as EmailTemplate
} from './emailTemplate';

import {
  queries as EmailDeliveryQueries,
  types as EmailDelivery
} from './emailDelivery';

import {
  fieldsGroupsMutations as FieldGroupMutations,
  fieldsGroupsQueries as FieldGroupQueries,
  fieldsGroupsTypes as FieldGroupTypes,
  fieldsMutations as FieldMutations,
  fieldsQueries as FieldQueries,
  fieldsTypes as FieldTypes
} from './field';

import {
  mutations as FormMutatons,
  queries as FormQueries,
  types as FormTypes
} from './form';

import {
  mutations as EngageMutations,
  queries as EngageQueries,
  types as EngageTypes
} from './engage';

import {
  mutations as TagMutations,
  queries as TagQueries,
  types as TagTypes
} from './tag';

import {
  mutations as InternalNoteMutations,
  queries as InternalNoteQueries,
  types as InternalNoteTypes
} from './internalNote';

import {
  mutations as CustomerMutations,
  queries as CustomerQueries,
  types as CustomerTypes
} from './customer';

import {
  mutations as SegmentMutations,
  queries as SegmentQueries,
  types as SegmentTypes
} from './segment';

import { queries as InsightQueries, types as InsightTypes } from './insight';

import {
  mutations as KnowledgeBaseMutations,
  queries as KnowledgeBaseQueries,
  types as KnowledgeBaseTypes
} from './knowledgeBase';

import {
  mutations as NotificationMutations,
  queries as NotificationQueries,
  types as NotificationTypes
} from './notification';

import {
  mutations as ConversationMutations,
  queries as ConversationQueries,
  types as ConversationTypes
} from './conversation';

import {
  queries as ActivityLogQueries,
  types as ActivityLogTypes
} from './activityLog';

import {
  mutations as BoardMutations,
  queries as BoardQueries,
  types as BoardTypes
} from './board';

import {
  mutations as DealMutations,
  queries as DealQueries,
  types as DealTypes
} from './deal';

import {
  mutations as DashboardMutations,
  queries as DashboardQueries,
  types as DashboardTypes
} from './dashboard';

import {
  mutations as ProductMutations,
  queries as ProductQueries,
  types as ProductTypes
} from './product';

import {
  mutations as ConfigMutations,
  queries as ConfigQueries,
  types as ConfigTypes
} from './config';

import {
  mutations as ImportHistoryMutations,
  queries as ImportHistoryQueries,
  types as ImportHistoryTypes
} from './importHistory';

import {
  mutations as MessengerAppMutations,
  types as MessengerAppTypes
} from './messengerApp';

import {
  mutations as TicketMutations,
  queries as TicketQueries,
  types as TicketTypes
} from './ticket';

import {
  mutations as TaskMutations,
  queries as TaskQueries,
  types as TaskTypes
} from './task';

import {
  mutations as GrowthHackMutations,
  queries as GrowthHackQueries,
  types as GrowthHackTypes
} from './growthHack';

import { queries as LogQueries, types as LogTypes } from './log';

import {
  mutations as PipelineTemplateMutations,
  queries as PipelineTemplateQueries,
  types as PipelineTemplateTypes
} from './pipelineTemplate';

import {
  mutations as RobotMutations,
  queries as RobotQueries,
  types as RobotTypes
} from './robot';

import {
  mutations as ConformityMutations,
  types as ConformityTypes
} from './conformity';

import {
  mutations as ChecklistMutations,
  queries as ChecklistQueries,
  types as ChecklistTypes
} from './checklist';
import {
  mutations as PipelineLabelMutations,
  queries as PipelineLabelQueries,
  types as PipelineLabelTypes
} from './pipelineLabel';

import {
  mutations as CalendarMutations,
  queries as CalendarQueries,
  types as CalendarTypes
} from './calendars';

import {
  mutations as WebhookMutations,
  queries as WebhookQueries,
  types as WebhookTypes
} from './webhook';
import {
  mutations as WidgetMutations,
  queries as WidgetQueries,
  types as WidgetTypes
} from './widget';

export const types = `
  scalar JSON
  scalar Date
  ${CommonTypes}
  ${UserTypes}
  ${InternalNoteTypes}
  ${ActivityLogTypes}
  ${CompanyTypes}
  ${ChannelTypes}
  ${BrandTypes}
  ${IntegrationTypes}
  ${ResponseTemplate}
  ${Script}
  ${EmailTemplate}
  ${EngageTypes}
  ${EmailDelivery}
  ${TagTypes}
  ${FieldTypes}
  ${FormTypes}
  ${ConformityTypes}
  ${CustomerTypes}
  ${SegmentTypes}
  ${ConversationTypes}
  ${InsightTypes}
  ${KnowledgeBaseTypes}
  ${NotificationTypes}
  ${BoardTypes}
  ${DealTypes}
  ${DashboardTypes}
  ${ProductTypes}
  ${ConfigTypes}
  ${FieldGroupTypes}
  ${ImportHistoryTypes}
  ${MessengerAppTypes}
  ${PermissionTypes}
  ${TicketTypes}
  ${TaskTypes}
  ${LogTypes}
  ${GrowthHackTypes}
  ${PipelineTemplateTypes}
  ${ChecklistTypes}
  ${RobotTypes}
  ${PipelineLabelTypes}
  ${WidgetTypes}
  ${WebhookTypes}
  ${CalendarTypes}
`;

export const queries = `
  type Query {
    ${UserQueries}
    ${ChannelQueries}
    ${BrandQueries}
    ${BoardQueries}
    ${IntegrationQueries}
    ${ResponseTemplateQueries}
    ${ScriptQueries}
    ${EmailTemplateQueries}
    ${EmailDeliveryQueries}
    ${FieldQueries}
    ${EngageQueries}
    ${FormQueries}
    ${TagQueries}
    ${InternalNoteQueries}
    ${CompanyQueries}
    ${CustomerQueries}
    ${SegmentQueries}
    ${ConversationQueries}
    ${InsightQueries}
    ${KnowledgeBaseQueries}
    ${NotificationQueries}
    ${ActivityLogQueries}
    ${DealQueries}
    ${DashboardQueries}
    ${ProductQueries}
    ${ConfigQueries}
    ${FieldGroupQueries}
    ${ImportHistoryQueries}
    ${PermissionQueries}
    ${TicketQueries}
    ${TaskQueries}
    ${LogQueries}
    ${GrowthHackQueries}
    ${PipelineTemplateQueries}
    ${ChecklistQueries}
    ${RobotQueries}
    ${PipelineLabelQueries}
    ${WidgetQueries}
    ${WebhookQueries}
    ${CalendarQueries}
  }
`;

export const mutations = `
  type Mutation {
    ${UserMutations}
    ${CompanyMutations}
    ${ConversationMutations}
    ${EngageMutations}
    ${TagMutations}
    ${BoardMutations}
    ${BrandMutations}
    ${ResponseTemplateMutations}
    ${ScriptMutations}
    ${EmailTemplateMutations}
    ${InternalNoteMutations}
    ${CustomerMutations}
    ${SegmentMutations}
    ${FieldMutations}
    ${ChannelMutations}
    ${FormMutatons}
    ${IntegrationMutations}
    ${KnowledgeBaseMutations}
    ${NotificationMutations}
    ${DealMutations}
    ${DashboardMutations}
    ${ProductMutations}
    ${ConfigMutations}
    ${FieldGroupMutations}
    ${ImportHistoryMutations}
    ${MessengerAppMutations}
    ${PermissionMutations}
    ${TicketMutations}
    ${TaskMutations}
    ${GrowthHackMutations}
    ${PipelineTemplateMutations}
    ${ConformityMutations}
    ${ChecklistMutations}
    ${RobotMutations}
    ${PipelineLabelMutations}
    ${WidgetMutations}
    ${WebhookMutations}
    ${CalendarMutations}
  }
`;

export const subscriptions = `
  type Subscription {
    conversationChanged(_id: String!): ConversationChangedResponse
    conversationMessageInserted(_id: String!): ConversationMessage
    conversationClientMessageInserted(userId: String!): ConversationMessage
    conversationClientTypingStatusChanged(_id: String!): ConversationClientTypingStatusChangedResponse
    conversationAdminMessageInserted(customerId: String!): ConversationAdminMessageInsertedResponse
    conversationExternalIntegrationMessageInserted: JSON
    conversationBotTypingStatus(_id: String!): JSON
    customerConnectionChanged(_id: String): CustomerConnectionChangedResponse
    activityLogsChanged: Boolean
    importHistoryChanged(_id: String!): ImportHistory
    notificationInserted(userId: String): Notification
    onboardingChanged(userId: String!): OnboardingNotification

    pipelinesChanged(_id: String!): PipelineChangeResponse

    checklistsChanged(contentType: String!, contentTypeId: String!): Checklist
    checklistDetailChanged(_id: String!): Checklist
    calendarEventUpdated: JSON
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations} ${subscriptions}`);

export default typeDefs;

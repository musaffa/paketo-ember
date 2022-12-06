/* eslint-disable no-undef */

window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    // available handlers: silence, log, throw
    // example syntax: { handler: 'silence', matchId: '...' }
    { handler: 'silence', matchId: 'remove-owner-inject' },
  ],
};

/* eslint-enable no-undef */

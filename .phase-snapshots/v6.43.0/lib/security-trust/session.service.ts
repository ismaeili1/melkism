import type {
  SessionRecord,
  SessionStatus,
} from "./session.types";

export class SessionService {
  create(
    identityId: string,
    durationSeconds = 3600,
    metadata?: Record<string, unknown>
  ): SessionRecord {
    const createdAt = new Date();
    const expiresAt = new Date(
      createdAt.getTime() +
        durationSeconds * 1000
    );

    return {
      id: crypto.randomUUID(),
      identityId,
      status: "active",
      createdAt: createdAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
      lastActivityAt: createdAt.toISOString(),
      metadata,
    };
  }

  isActive(
    session: SessionRecord,
    now = new Date()
  ): boolean {
    if (session.status !== "active") {
      return false;
    }

    return (
      new Date(session.expiresAt).getTime() >
      now.getTime()
    );
  }

  changeStatus(
    session: SessionRecord,
    status: SessionStatus
  ): SessionRecord {
    return {
      ...session,
      status,
      lastActivityAt: new Date().toISOString(),
    };
  }
}